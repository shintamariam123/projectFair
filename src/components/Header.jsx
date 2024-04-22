import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth';

function Header({ insideDashBoard }) {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <div>
      <Navbar style={{ zIndex: '1' }} className="card shadow top-0 position-fixed w-100">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder'> <i className='fa-brands fa-docker me-1'></i>Project Fair</Link>
          </Navbar.Brand>
          {insideDashBoard &&
            <div className='ms-auto'>
              <button onClick={logout} className='btn btn-link'>Logout <i className='fa-solid fa-arrow-right'></i>
              </button>
            </div>

          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header