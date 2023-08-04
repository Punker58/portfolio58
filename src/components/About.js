import img1 from '../img/about/1.png'
import img3 from '../img/about/3.png'

function About() {
    return(
        <>

            <div className="row ">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p data-aos="fade-down" data-aos-duration="1000" >
                        <em>Ciao a tutti! Sono Francesco Castiello</em>,
                        un giovane di 26 anni con una vera passione per l'informatica,
                        il web development e il web design. <br/> <br/>
                        <em>Fin da quando ero bambino, ho sempre mostrato un forte interesse per la tecnologia</em>,
                        e questa passione mi ha spinto a esplorare il mondo digitale fino a diventare un web
                        developer e web designer di talento. <br/> <br/>
                        <em>La programmazione è diventata la mia lingua</em>, e ho imparato a padroneggiare diversi
                        linguaggi di programmazione per realizzare progetti digitali all'avanguardia. <br/> <br/>
                        <em>La soddisfazione che provo nel trasformare le idee in realtà attraverso il coding 
                        è semplicemente impagabile.</em>
                    </p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <img className="float-end" src={img1} alt='...'/>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <img className="float-end" src={img3} alt='...'/>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p data-aos="fade-down" data-aos-duration="1000" >
                        <em>Oltre al mondo digitale</em>, ci sono due altre grandi passioni nella mia vita: il calcio e il gaming.<br/><br/>
                        Il calcio è uno sport che mi fa battere il cuore e mi coinvolge completamente. <em>Amo seguire il mio
                        club del cuore e giocare con gli amici nel tempo libero.</em> <br/><br/>
                        <em>Il gaming è un altro universo affascinante in cui mi immergo con entusiasmo.</em>
                        Esplorare mondi virtuali, affrontare sfide e scoprire nuove storie mi regala
                        momenti di pura gioia. <br/><br/> <em> Il gaming mi offre un'esperienza unica e mi permette di
                        allontanarmi dalla realtà per un po'</em>, vivendo avventure straordinarie attraverso uno schermo.
                    </p>
                </div>

            </div>

        </>
    );

}

export default About;