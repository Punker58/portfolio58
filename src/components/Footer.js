import logo from '../img/icon/logo.png';

const linkSito= [
    {"link" : "#home", "nome" : "Home"},
    {"link" : "#lavoro", "nome" : "Visione"},
    {"link" : "#progetti", "nome" : "Progetti"},
    {"link" : "#skills", "nome" : "Skills"},
    {"link" : "#chisono", "nome" : "About me"},
    {"link" : "#contatti", "nome" : "Preventivi"},
];

const linkSocial= [
    {"link" : "#home", "nome" : "Facebook"},
    {"link" : "#lavoro", "nome" : "Whatsapp"},
    {"link" : "#progetti", "nome" : "Instagram"},
    {"link" : "#skills", "nome" : "Github"},
    {"link" : "#chisono", "nome" : "Linkedin"}
];

function Footer() {
    return(
        <>

            <footer>
                <div className="container text-break mt-5">
                    <div className="row">

                        <div className="col-3 mt-4 mb-4">
                            <img src={logo} height={'100px'} alt='...'/>
                        </div>

                        <div className="col-3 font-merriWeather">
                            <p className='fw-bold'>Mappa del sito</p>

                            {linkSito.map(function(data) {
                                    return (
                                        <p className='m-4'><a href={data.link} className='font-merriWeather text-white-50'>{data.nome}</a></p>
                                    )
                            })}

                        </div>

                        <div class="col-3">
                            <p className='fw-bold m-4'>Social</p>

                            {linkSocial.map(function(data) {
                                return (
                                    <p className='m-4'><a href={data.link} className='font-merriWeather text-white-50'>{data.nome}</a></p>
                                )
                            })}

                        </div>

                        <div class="col-3">

                        </div>

                        <hr/>

                        <div className="col-12 mt-5 pfooter">
                            <a href="https://www.facebook.com/straightedge58"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.instagram.com/punker58/"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/francesco-castiello-pk58/"><i class="fa-brands fa-reddit"></i></a>
                            <a href="https://github.com/Punker58"><i class="fa-brands fa-linkedin"></i></a>
                        </div>

                        <div className="col-12 mt-1 mb-5 ">
                            <p>
                                ©2022 Francesco Castiello<br/>
                                Tutti i diritti riservati
                            </p>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;