function Slogan() {
    return (
        <>

            <p className="slogan fs-2 text-break font-merriWeather fst-italic" data-aos="fade" data-aos-duration="3000">Ciao, sono Francesco Castiello</p>
            <p className="slogan2 text-break fst-italic mb-1" data-aos="fade" data-aos-duration="3000"> Jr. Web Developer & Web designer</p>
            <p className="slogan3 fst-italic" data-aos="fade" data-aos-duration="3000">presso Volla, Napoli</p>

            <hr/>
            <span className="font-merriWeather fst-italic text-white-50">Costruisco siti web per imprese e privati <br/>seguendo 2 concetti fondamentali : Design Unico & Sviluppo perfetto.</span> <br/>

            <div className="row mt-5">
                <div className="col-6">
                    <button type="button" className="fs-1 btn btn-outline-danger " href="tel:+393281131848">CHIAMA</button>
                </div>
                <div className="col-6">
                    <button type="button" className="fs-1 btn btn-outline-danger float-end " href="#contacts">EMAIL</button>
                </div>
            </div>
            

        </>
    );
}

export default Slogan;