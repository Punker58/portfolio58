import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PrivacyPolicy() {

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

                    <h1>Privacy Policy</h1>
                    <a href='/privacy-policy' className='me-3  text-black'>Privacy Policy</a> -
                    <a href='/cookie-policy' className='ms-3  text-black'>Cookie Policy</a>

                    <h2 className='mt-5'>Titolare del Trattamento dei Dati</h2>
                    <p>Francesco Castiello - Volla, Napoli.</p>
                    <p><strong>Indirizzo email del Titolare:</strong> castiellofrancesco058@gmail.com</p>

                    <h2>Privacy Policy</h2>
                    <p>La presente Privacy Policy descrive come Francesco Castiello
                        raccoglie, utilizza e protegge i dati personali degli utenti che visitano il nostro sito web
                        https://punker58.github.io.
                        Assicuriamo che tutte le informazioni fornite verranno trattate in conformità al Regolamento Generale
                        sulla Protezione dei Dati (GDPR) e al Codice in materia di protezione dei dati personali
                        (D.Lgs. 196/2003 e successive modifiche), applicabili in Italia.
                    </p>

                    <h2>1. Dati personali raccolti</h2>
                    <span>Durante la visita del nostro sito web, potremmo raccogliere i seguenti tipi di dati personali:</span>
                    <ul>
                        <li>Nome</li>
                        <li>Indirizzo email</li>
                        <li>Numero di telefono</li>
                        <li>Alre informazioni di contatto</li>
                    </ul>

                    <h3>2. FinalitA' del trattamento</h3>

                    <p>I dati personali raccolti verranno utilizzati per le seguenti finalità:</p>
                    <ul>
                        <li>Rispondere alle richieste degli utenti</li>
                        <li>Fornire informazioni sui nostri servizi e progetti</li>
                        <li>Comunicazioni di marketing (solo previo consenso dell'utente)</li>
                        <li>Migliorare l'esperienza degli utenti sul nostro sito web</li>
                        <li>Monitorare e analizzare l'utilizzo del sito web</li>
                    </ul>

                    <h2>3. Base giuridica del trattamento</h2>

                    <p>Il trattamento dei dati personali è basato su:</p>

                    <ul>
                        <li>Il consenso dell'utente</li>
                        <li>L'esecuzione di un contratto o l'adempimento di obblighi precontrattuali</li>
                        <li>Il rispetto di obblighi legali</li>
                        <li>Il perseguimento di interessi legittimi</li>
                    </ul>

                    <h2>4. Cookie e tecnologie di tracciamento</h2>

                    <p>Il nostro sito web utilizza cookie e tecnologie di tracciamento per migliorare
                        l'esperienza degli utenti e raccogliere informazioni sull'utilizzo del sito.
                        Per maggiori dettagli su come utilizziamo i cookie e sulle scelte degli utenti,
                        consultare la nostra  <a href='/cookie-policy' className='text-black'>Cookie Policy</a>.
                    </p>

                    <h2>5. Comunicazioni di marketing</h2>

                    <p>Invieremo comunicazioni di marketing agli utenti solo previo consenso dell'utente.
                        Gli utenti possono revocare il consenso in qualsiasi momento.
                    </p>

                    <h2>6. Conservazione dei dati</h2>

                    <p>I dati personali verranno conservati per il periodo necessario per raggiungere
                        le finalità indicate nella presente Privacy Policy, a meno che non sia richiesto
                        o consentito dalla legge un periodo di conservazione più lungo.
                    </p>

                    <h2>7. Sicurezza dei dati</h2>

                    <p>Adottiamo misure di sicurezza adeguate per proteggere i dati personali degli utenti
                        da accessi non autorizzati, divulgazioni o distruzioni.
                    </p>

                    <h2>8. Diritti degli utenti</h2>

                    <p>Gli utenti hanno il diritto di:</p>

                    <ul>
                        <li>Accedere ai propri dati personali</li>
                        <li>Chiedere la rettifica dei dati inesatti</li>
                        <li>Chiedere la cancellazione dei dati</li>
                        <li>Opporsi al trattamento dei dati</li>
                        <li>Richiedere la limitazione del trattamento</li>
                        <li>Esportare i dati in un formato strutturato e leggibile</li>
                    </ul>

                    <h2>9. Link a siti di terze parti</h2>

                    <p>Il nostro sito web potrebbe contenere link a siti web di terze parti.
                        La presente Privacy Policy si applica solo al nostro sito web.
                        Si consiglia di leggere le politiche sulla privacy dei siti esterni visitati.
                    </p>

                    <h2>10. Modifiche alla Privacy Policy</h2>

                    <p>La presente Privacy Policy potrebbe essere soggetta a modifiche.
                        Eventuali aggiornamenti saranno pubblicati su questa pagina e gli
                        utenti saranno informati dei cambiamenti rilevanti.
                    </p>

                    <h3>11. Contatti</h3>

                    <p>Per qualsiasi domanda o richiesta riguardante la presente Privacy Policy
                        o il trattamento dei dati personali, contattaci all'indirizzo:
                        castiellofrancesco058@gmail.com.
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

export default PrivacyPolicy;