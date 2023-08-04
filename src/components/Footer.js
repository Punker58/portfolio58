import logo from '../img/icon/logo.png'

const linkSito = [
    {"link" : "/portfolio58#home", "nome" : "Home"},
    {"link" : "/portfolio58#lavoro", "nome" : "Visione"},
    {"link" : "/portfolio58#progetti", "nome" : "Progetti"},
    {"link" : "/portfolio58#skills", "nome" : "Skills"},
    {"link" : "/portfolio58#chisono", "nome" : "About me"},
    {"link" : "/portfolio58#contatti", "nome" : "Preventivi"},
];

const linkSocial = [
    {"link" : "/portfolio58#home", "nome" : "Facebook"},
    {"link" : "/portfolio58#lavoro", "nome" : "Whatsapp"},
    {"link" : "/portfolio58#progetti", "nome" : "Instagram"},
    {"link" : "/portfolio58#skills", "nome" : "Github"},
    {"link" : "/portfolio58#chisono", "nome" : "Linkedin"}
];

const linkDesign = [
    {"link" : "/dettagli-progetto/magliozzi", "nome" : "Magliozzi Group"},
    {"link" : "/dettagli-progetto/freestyle", "nome" : "Freestyle concept store"},
    {"link" : "/dettagli-progetto/monaci", "nome" : "Monacidomenico.lab"},
    {"link" : "/dettagli-progetto/wearedifferent", "nome" : "We are different - Boutique"},
];

const linkSocialFrontEnd = [
    {"link" : "https://www.facebook.com/straightedge58", "icon" : "fa-brands fa-instagram m-1"},
    {"link" : "https://www.instagram.com/punker58/", "icon" : "fa-brands fa-facebook m-1"},
    {"link" : "https://www.linkedin.com/in/francesco-castiello-pk58/", "icon" : "fa-brands fa-reddit m-1"},
    {"link" : "https://github.com/Punker58", "icon" : "fa-brands fa-linkedin m-1"}
];

function Footer() {
    return(
        <>

            <footer>
                <div className="container text-break mt-5">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-4 mb-4">
                            <img src={logo} height={'100px'} alt='...'/>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                            <p className='fw-bold text-light'>Mappa del sito</p>

                            {linkSito.map(function(data) {
                                    return (
                                        <p className='m-4'><a href={data.link} className='text-white-50'>{data.nome}</a></p>
                                    )
                            })}

                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <p className='fw-bold m-4 text-light'>Social</p>

                            {linkSocial.map(function(data) {
                                return (
                                    <p className='m-4'><a href={data.link} className='text-white-50'>{data.nome}</a></p>
                                )
                            })}

                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <p className='fw-bold m-4 text-light'>Design</p>

                            {linkDesign.map(function(data) {
                                return (
                                    <p className='m-4'><a href={data.link} className='text-white-50'>{data.nome}</a></p>
                                )
                            })}

                        </div>

                        <hr className='text-white'/>

                        <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 mt-1 mb-5 text-light">
                            <p>
                                Copyright ©2023 Francesco Castiello<br/>
                                <a href="/privacy-policy" className='text-white-50 ' >Privacy Policy</a> - 
                                <a href="/cookie-policy" className='text-white-50 ms-1' >Cookie Policy</a>
                            </p>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 mb-5 mt-3 pfooter">
                            {linkSocialFrontEnd.map(function(data) {
                                    return (
                                        <a href={data.link} className='text-light'><i className={data.icon}></i></a>
                                    )
                                })}
                        </div>

                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;