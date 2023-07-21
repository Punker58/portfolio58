import logo from '../img/icon/logo.png'

function Lavoro() {
    return(
        <>


            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8  mt-5 mb-5 lavoro">
                <h1 className="text-black">CONCETTI FONDAMENTALI</h1>
                <hr className="text-black"/>

                    <h5> Design Unico e Coinvolgente:</h5>
                    <p>
                        il design è un elemento chiave per attirare e coinvolgere gli utenti.<br/>
                        I miei progetti si distinguono per il loro stile unico <br/> e per la capacità
                        di catturare l'attenzione del pubblico fin dal primo istante.
                    </p>

                    <h5>Sviluppo Web di Qualità:</h5>
                    <p>
                        Offro sempre uno sviluppo web di alta qualità,garantendo che ogni sito
                        web sia performante, <br/> sicuro e intuitivo da navigare.
                    </p>

                    <h5>Adattabilità su Diverse Piattaforme:</h5>
                    <p>
                        I miei progetti sono ottimizzati per desktop, tablet e dispositivi mobili,<br/>
                        garantendo un'esperienza utente fluida e coinvolgente.
                    </p>

                    <h5>Collaborazione e Comunicazione:</h5>
                    <p>
                        Lavorare con me significa avere un partner di fiducia che comprende le vostre
                        esigenze e desideri. <br/>Collegando comunicazione e capacità di lavorare in sinergia
                        con il cliente  si assicura un risultato <br/> finale oltre le aspettative.
                    </p>

            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4  mt-5 mb-5 ">
                <img src={logo} alt='foto'/>
            </div>

        </>
    );

}

export default Lavoro;