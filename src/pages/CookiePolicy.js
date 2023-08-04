import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CookiePolicy() {

    return (
        <>

            <section id='home' >

                <div className='container'>

                    <div className='row'>

                    <div className='col-12'>
                        <Navbar/>
                    </div>

                    </div>

                </div>
                
            </section>

            <section>

                <div className='container'>

                    <div className='row'>

                        <div className='col-12 '>

                            <h1>Cookie Policy</h1>
                            <a href='/privacy-policy' className='me-3  text-black'>Privacy Policy</a> -
                            <a href='/cookie-policy' className='ms-3  text-black'>Cookie Policy</a>

                            <p className='mt-2'>La presente Cookie Policy spiega come Francesco Castiello
                                utilizza i cookie e tecnologie simili sul nostro sito web https://punker58.github.io.
                            </p>

                            <h2>1. Cosa sono i cookie</h2>

                            <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo
                                dell'utente quando visita un sito web. I cookie possono essere utilizzati
                                per migliorare l'esperienza dell'utente, per raccogliere informazioni
                                sull'utilizzo del sito e per fornire funzionalità aggiuntive.
                            </p>

                            <h2>2. Tipi di cookie utilizzati</h2>

                            <ul>
                                <li><strong className='text-black'>Cookie tecnici</strong>: Questi cookie sono essenziali per il funzionamento del sito web
                                    e consentono all'utente di navigare e utilizzare le sue funzioni.
                                    Senza questi cookie, alcune parti del sito non potrebbero funzionare correttamente.
                                </li>

                                <li><strong className='text-black'>Cookie di analisi</strong>: Questi cookie ci permettono di monitorare e analizzare l'utilizzo
                                    del nostro sito web, al fine di migliorare le prestazioni e la struttura del sito.
                                    Utilizziamo servizi di terze parti come Google Analytics per raccogliere e analizzare tali informazioni.
                                </li>

                                <li><strong className='text-black'>Cookie di preferenze</strong>: Questi cookie consentono al sito web di ricordare le preferenze
                                    dell'utente, come la lingua preferita o la regione in cui si trova,
                                    al fine di fornire una migliore esperienza di navigazione.
                                </li>

                                <li><strong className='text-black'>Cookie di marketing</strong>: Questi cookie vengono utilizzati per tracciare le attività
                                    di navigazione degli utenti sul sito web e per mostrare annunci mirati e rilevanti.
                                    Possono essere utilizzati da noi o da partner di pubblicità di terze parti.
                                </li>
                            </ul>

                            <h2>3. Gestione dei cookie</h2>

                            <p>Gli utenti possono gestire le preferenze sui cookie attraverso le impostazioni del proprio browser.
                                È possibile consentire o bloccare i cookie, eliminare i cookie esistenti e impostare preferenze per
                                i cookie futuri. Tuttavia, disabilitando alcuni cookie potrebbe influire sulla funzionalità
                                e l'esperienza del sito web.
                            </p>

                            <h2>4. Cookie di terze parti</h2>

                            <p>Il nostro sito web potrebbe utilizzare cookie di terze parti forniti da servizi esterni.
                                Questi cookie sono soggetti alle politiche sulla privacy dei rispettivi fornitori
                                e non sono controllati da Francesco Castiello.
                                Si consiglia di consultare le politiche sulla privacy di questi terzi per
                                ulteriori informazioni sui loro cookie e sulle pratiche di gestione dei dati.
                            </p>

                            <h2>5. Aggiornamenti alla Cookie Policy</h2>

                            <p>La presente Cookie Policy potrebbe essere soggetta a modifiche.
                                Eventuali aggiornamenti saranno pubblicati su questa pagina e
                                gli utenti saranno informati dei cambiamenti rilevanti.
                            </p>

                            <p>Per ulteriori informazioni sulla nostra gestione dei cookie e sulla privacy,
                                si prega di fare riferimento alla nostra <a href="/privacy-policy" className='text-black'>Privacy Policy</a>.
                            </p>

                            <p>Ultimo aggiornamento: 04/08/2023</p>

                            <p>Francesco Castiello - Tutti i diritti riservati.</p>


                        </div>

                    </div>

                </div>

            </section>

            <Footer/>

        </>
    );

}

export default CookiePolicy;