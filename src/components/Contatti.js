function Contatti() {
    return(
        <>

            <div class="form-floating mb-3"> 
                <input type="text" className="form-control border border-dark" id="floatingInput" placeholder="Nome"/>
                <label for="floatingInput" >Nome</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" className="form-control border border-dark" id="floatingPassword" placeholder="Cognome"/>
                <label for="floatingPassword">Cognome</label>
            </div>

            <div class="form-floating">
                <input type="email" className="form-control border border-dark" id="floatingPassword" placeholder="Email"/>
                <label for="floatingPassword">Email</label>
            </div>

            <p className="text-black font-merriWeather mt-3">Parlami del tuo progetto in modo dettagliato, per esempio le funzionalità chiave.</p>
            <div class="form-floating">
                <textarea className="form-control border border-dark"  id="floatingTextarea2" style={{ height: '100px'}}></textarea>
            </div>

            <div class="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label text-black font-merriWeather " for="flexCheckDefault">
                    Acconsento al trattamento dei miei dati personali al fine di ricevere
                    una risposta al mio messaggio, come indicato nella Privacy Policy. *
                </label>
            </div>
            <button type="button" className="btn btn-success mt-3">INVIA MESSAGGIO</button>

        </>
    );
}

export default Contatti;