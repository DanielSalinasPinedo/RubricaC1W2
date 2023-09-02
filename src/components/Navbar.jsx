import React from 'react'

const Navbar = (props) => {
  const modoOverview=()=>{
    props.setOverview(true)
    props.setContent(false)
    props.setCreate(false)
  }

  const modoContent=()=>{
    props.setOverview(false)
    props.setContent(true)
    props.setCreate(false)
  }

  const modoCreate=()=>{
    props.setOverview(false)
    props.setContent(false)
    props.setCreate(true)
  }

  return(
    <div className="bg-dark text-white py-3">
      <div className="container">
        <div className='btn-group d-flex justify-content-center'>
          <button onClick={modoOverview} className='btn btn-dark'>OVERVIEW</button>
          <button onClick={modoContent} className='btn btn-dark'>CONTENT</button>
          <button onClick={modoCreate} className='btn btn-dark'>CREATE</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar