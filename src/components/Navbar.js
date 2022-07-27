import logo from '../img/icon/logo.png'


function Navbar() {
    return(
        
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={logo} alt="..."/>
                </a>
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;