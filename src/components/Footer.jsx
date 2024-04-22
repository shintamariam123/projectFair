import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
        <div className='footer-content d-flex justify-content-between '>
            <div style={{width:'400px'}} className="media">
                <h5 className='d-flex'><i style={{height:'50px'}} className="fa-solid fa-music  me-3"></i>Project Fair</h5>
                <p style={{textAlign:'justify'}}>Designed and built ith all the love in the orld by the 
                Bootstrap team ith the help of our contributors.</p>
                <span>Code licensed MIT, docs CC BY 3.0.</span>
                <span>Currently v5.3.2.</span>
            </div>
            <div className="links d-flex flex-column">
                <h5 style={{height:'50px'}}>links</h5>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
                <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch History </Link>
            </div>
            <div className="guides d-flex flex-column">
                <h5 style={{height:'50px'}}>Guides</h5>
                <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
                <a href="https://reactrouter.com/en/main" target='-blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
                <a href="https://react-bootstrap.github.io/" target='-blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
                <h5 style={{height:'50px'}}>Contact Us</h5>
               <div className='d-flex'>
                <input type="text" className='form-control me-1' placeholder='Email Id Please'/>
                <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
               </div>
               <div className='icons d-flex justify-content-between mt-3 '>
               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-twitter fa-1x'></i></a>
               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-instagram fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-facebook fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-linkedin fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-github fa-1x'></i></a>

               <a href="https://react.dev/" target='-blank' style={{textDecoration:'none',color:'white'}}> <i className='fa-brands fa-phone fa-1x'></i></a>

                </div>
            </div>
        </div>
        <p className='text-center mt-2'>Copyright 2024 Project Fair. 
            built with React.
        </p>
        </div>
  )
}

export default Footer