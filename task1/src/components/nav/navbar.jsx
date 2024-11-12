import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav className='container-fluid navbar shadow navbar-light bg-light w-100 d-flex justify-content-between align-items-center px-4 position-fixed'>
            <div className="nav-brand">
                <Link to="#">Home</Link>
            </div>        
            <ul className="list-unstyled d-flex">
                <li className="me-4">
                    <Link to='/'>About us</Link>
                </li>
                <li>
                    <Link to='/'>Login/Logout</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
