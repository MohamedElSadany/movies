import React from 'react'

export default function Error() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
           <h1 className='display-3'>404</h1>
           <h1>error</h1>
           <h2>page not found</h2>
           <h3>
            this requested url 
            <span className='text-danger'>
    
            </span> {" "}
             was not found
           </h3>
          </div>
        </div>
      </div>
  )
}
