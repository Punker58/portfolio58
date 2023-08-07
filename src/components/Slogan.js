function Slogan() {

    const altChiama = 'tasto chiama per chiamare '
    const altEmail =  'tasto email per inviare email '
    const titleChiama = 'cliccando sarà possibile entrare in contatto con me via telefonicamente.'
    const titleEmail = 'cliccando il tasto sarai portato alla sezione contatti dove potrai inviare un email.'

    return (
        <>

            <p className="slogan fs-2 text-break fst-italic text-light" data-aos="fade" data-aos-duration="3000">Ciao, sono Francesco Castiello</p>
            <p className="slogan2 text-break fst-italic mb-1 font-rintix" data-aos="fade" data-aos-duration="3000"> Jr. Web Developer & Web designer</p>
            <p className="slogan3 fst-italic font-rintix" data-aos="fade" data-aos-duration="3000">presso Volla, Napoli.</p>

            <hr className="text-white" data-aos="fade" data-aos-duration="3000"/>
            <span className="fst-italic text-white-50" data-aos="fade" data-aos-duration="3000">Costruisco siti web per imprese e privati <br/>seguendo 2 concetti fondamentali : Design Unico & Sviluppo perfetto.</span> <br/>

            <div className="row mt-5" data-aos="fade" data-aos-duration="3000">
                <div className="col-6">
                    <a type="button" className="fs-1 btn btn-outline-danger text-light font-rintix" href="tel:+393281131848" alt={altChiama} title={titleChiama}>CHIAMA</a>
                </div>
                <div className="col-6">
                    <a type="button" className="fs-1 btn btn-outline-danger float-end text-light font-rintix" href="#contatti" alt={altEmail} title={titleEmail}>EMAIL</a>
                </div>
            </div>
            

        </>
    );
}

export default Slogan;