import logo from '../img/icon/logo.webp'

const linkSito = [
    {"link" : "/portfolio58#home", "nome" : "Home", 'title' : 'Vai alla home'},
    {"link" : "/portfolio58#lavoro", "nome" : "Visione", 'title' : 'Vai alla sezione lavori'},
    {"link" : "/portfolio58#progetti", "nome" : "Progetti", 'title' : 'Vai alla sezione progetti'},
    {"link" : "/portfolio58#skills", "nome" : "Skills", 'title' : 'Vai alla sezione skills'},
    {"link" : "/portfolio58#chisono", "nome" : "About me", 'title' : 'Vai alla sezione chi sono'},
    {"link" : "/portfolio58#contatti", "nome" : "Preventivi", 'title' : 'Vai alla sezione contatti'},
];

const linkSocial = [
    {"link" : "https://www.facebook.com/straightedge58", "nome" : "Facebook", 'title' : 'Visita il mio profilo Facebook'},
    {"link" : "https://github.com/Punker58", "nome" : "Github", 'title' : 'Visita il mio profilo Github'},
    {"link" : "https://www.instagram.com/punker58/", "nome" : "Instagram", 'title' : 'Visita il mio profilo Instagram'},
    {"link" : "https://www.linkedin.com/in/francesco-castiello-pk58/", 'title' : 'Visita il mio profilo Linkedin'},
    {"link" : "https://www.reddit.com/user/Punker58", 'title' : 'Visita il mio profilo Reddit'}
];

const linkDesign = [
    {"link" : "/dettagli-progetto/magliozzi", "nome" : "Magliozzi Group", 'title' : 'Vai alla pagina del progetto Magliozzi Group'},
    {"link" : "/dettagli-progetto/freestyle", "nome" : "Freestyle concept store", 'title' : 'Vai alla pagina del progetto Freestyle Concept Store'},
    {"link" : "/dettagli-progetto/monaci", "nome" : "Monacidomenico.lab", 'title' : 'Vai alla pagina del progetto Monacidomenico.lab'},
    {"link" : "/dettagli-progetto/wearedifferent", "nome" : "We are different - Boutique", 'title' : 'Vai alla pagina del progetto We are different - Boutique'},
];

const linkSocialFrontEnd = [
    {"link" : "https://www.facebook.com/straightedge58", "icon" : "fa-brands fa-instagram m-1" , 'title' : 'Visita il mio profilo Facebook'},
    {"link" : "https://www.instagram.com/punker58/", "icon" : "fa-brands fa-facebook m-1", 'title' : 'Visita il mio profilo Instagram'},
    {"link" : "https://www.linkedin.com/in/francesco-castiello-pk58/", "icon" : "fa-brands fa-reddit m-1", 'title' : 'Visita il mio profilo Linkedin'},
    {"link" : "https://github.com/Punker58", "icon" : "fa-brands fa-linkedin m-1", 'title' : 'Visita il mio profilo Github'}
];

function Footer() {
    return(
        <>

            <footer>
                <div className="container text-break mt-5">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-4 mb-4">
                            <img src={logo} height={'100px'} alt='logo sito web Francesco Castiello' title="Logo rappresentante il marchio Francesco Castiello - Web Developer e Designer"/>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                            <p className='fw-bold text-light'>Mappa del sito</p>

                            {linkSito.map(function(data, index) {
                                    return (
                                        <p key={index} className='m-4'><a href={data.link} title={data.title} className='text-white-50'>{data.nome}</a></p>
                                    )
                            })}

                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <p className='fw-bold m-4 text-light'>Social</p>

                            {linkSocial.map(function(data, index) {
                                return (
                                    <p key={index} className='m-4'><a href={data.link} title={data.title}className='text-white-50'>{data.nome}</a></p>
                                )
                            })}

                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <p className='fw-bold m-4 text-light'>Design</p>

                            {linkDesign.map(function(data, index) {
                                return (
                                    <p key={index} className='m-4'><a href={data.link} className='text-white-50' title={data.title}>{data.nome}</a></p>
                                )
                            })}

                        </div>

                        <hr className='text-white'/>

                        <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 mt-1 mb-5 text-light">
                            <p>
                                Copyright ©2023 Francesco Castiello<br/>
                                <a href="/privacy-policy" className='text-white-50' title='vai alla pagina privacy policy'>Privacy Policy</a> - 
                                <a href="/cookie-policy" className='text-white-50 ms-1' title='vai alla pagina cookie policy'>Cookie Policy</a>
                            </p>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1 mb-5 mt-3 pfooter">
                            {linkSocialFrontEnd.map(function(data, index) {
                                    return (
                                        <a key={index} href={data.link} title={data.title}className='text-light'><i className={data.icon}></i></a>
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