import React,{useEffect,useState} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import axios from 'axios';
import MoviesList from "./components/MoviesList";
function App() {
 const [pageCount, setPageCount] = useState(0) 
  const [movies, setMovies] = useState([])
  //get all movies by axios
  const getAllMovies=async()=>{
    const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=81029c7421b424591f91294c125dc098&language=ar")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
   } 
   useEffect(() => {
     getAllMovies();
        
   }, []);

   //get current page
  const getPage=async(page)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81029c7421b424591f91294c125dc098&language=ar&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
   } 
   useEffect(() => {
     getAllMovies();
        
   }, []);

   // to search
   
   const search=async(word)=>{
    if(word === ""){
      getAllMovies()
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=81029c7421b424591f91294c125dc098&query=${word}&language=ar`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
     
    }
    
   } 
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
