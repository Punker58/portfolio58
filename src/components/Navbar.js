import logo from '../img/icon/logo.png'

const lista = [
    {link: '/portfolio58', text:'Home'},
    {link: '#lavoro', text:'Lavoro'},
    {link: '#progetti', text:'Progetti'},
    {link: '#skills', text:'Skills'},
    {link: '#chisono', text:'Chi sono'},
    {link: '#contatti', text:'Contatti'}
];

function Navbar() {
    return(
        <>
        
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="#home" className="navbar-brand">
                    <img src={logo} alt="..."/>
                </a>
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">

                        {lista.map(function(value){
                            return <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href={value.link}>{value.text}</a>
                                    </li>
                        })}

                    </ul>
                    <hr/>
                </div>
            </div>
        </nav>

        </>

    );
}

export default Navbar;