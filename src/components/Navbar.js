import logo from '../img/icon/logo.webp'
import { useMatch, useLocation } from "react-router-dom"

const lista = [
    {link: '/', text:'Home'},
    {link: '#lavoro', text:'Lavoro'},
    {link: '#progetti', text:'Progetti'},
    {link: '#skills', text:'Skills'},
    {link: '#chisono', text:'Chi sono'},
    {link: '#contatti', text:'Contatti'}
];

function Navbar() {

    const navStyle = useMatch({
        path: "/"
    });
    const location = useLocation();
    const colorBlack = 'black';

    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/" className=" navbar-brand">
                    <img src={logo} alt="logo sito web Francesco Castiello" title="Logo rappresentante il marchio Francesco Castiello - Web Developer e Designer"/>
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav">

                        {lista.map(function(value, index){

                            // Verifica se la path corrente corrisponde a '/'
                            const isHomePage = location.pathname === '/';
                            // Imposta la path in base alla condizione
                            const hrefValue = isHomePage ? value.link : '/';

                            return <li key={index} className="nav-item">
                                        <a className="nav-link font-rintix" style= {{ color: navStyle ? "white" : colorBlack}}  aria-current="page" href={hrefValue}>{value.text}</a>
                                    </li>
                        })}

                    </ul>
                    <hr style= {{ color: navStyle ? "white" : colorBlack}}/>
                </div>
            </div>
        </nav>

        </>

    );
}

export default Navbar;