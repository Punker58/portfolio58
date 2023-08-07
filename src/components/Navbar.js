import logo from '../img/icon/logo.webp'
import { useMatch } from "react-router-dom"

const lista = [
    {link: '/portfolio58', text:'Home'},
    {link: '/portfolio58#lavoro', text:'Lavoro'},
    {link: '/portfolio58#progetti', text:'Progetti'},
    {link: '/portfolio58#skills', text:'Skills'},
    {link: '/portfolio58#chisono', text:'Chi sono'},
    {link: '/portfolio58#contatti', text:'Contatti'}
];

function Navbar() {

    const navStyle = useMatch({
        path: "/portfolio58"
    });

    const colorBlack = 'black';

    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/portfolio58" className=" navbar-brand">
                    <img src={logo} alt="logo sito web Francesco Castiello" title="Logo rappresentante il marchio Francesco Castiello - Web Developer e Designer"/>
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav">

                        {lista.map(function(value, index){
                            return <li key={index} className="nav-item">
                                        <a className="nav-link font-rintix" style= {{ color: navStyle ? "white" : colorBlack}}  aria-current="page" href={value.link}>{value.text}</a>
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