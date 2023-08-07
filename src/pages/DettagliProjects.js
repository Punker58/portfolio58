import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// componenti
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contatti from '../components/Contatti'

// immagini
import fullPicMonaci from '../img/monaci/1.webp'
import PicMonaci from '../img/monaci/2.webp'
import Pic2Monaci from '../img/monaci/3.webp'
import Pic3Monaci from '../img/monaci/4.webp'

import fullPicMagliozzi from '../img/magliozzi/1.webp'
import PicMagliozzi from '../img/magliozzi/2.webp'
import Pic2Magliozzi from '../img/magliozzi/3.webp'
import Pic3Magliozzi from '../img/magliozzi/4.webp'

import fullPicFreestyle from '../img/freestyle/1.webp'
import PicFreestyle from '../img/freestyle/2.webp'
import Pic2Freestyle from '../img/freestyle/3.webp'
import Pic3Freestyle from '../img/freestyle/4.webp'

import fullPicweare from '../img/wearedifferent/1.webp'
import PicWeare from '../img/wearedifferent/2.webp'
import Pic2Weare from '../img/wearedifferent/3.webp'
import Pic3Weare from '../img/wearedifferent/4.webp'

import html5 from '../img/skills/html.svg';
import css from '../img/skills/css.svg';
import jspic from '../img/skills/js.svg'; 
import bt5 from '../img/skills/bootstrap.svg';
import phppic from '../img/skills/php.svg';
import mysqlpic from '../img/skills/mysql.svg';
// end immagini

function DettagliProjects() {

  // variabili default per parametri e progetto
  const params = useParams()
  let project = null

  // parametri per i vari progetti
  if(params.name === 'monaci') {
    project =  {
      titolo: 'MONACIDOMENICO.LAB',
      sottotitolo: 'Salone di barbieri, presso Volla (NA).',
      obiettivo: 'Ho bisogno di un’app che permetta ai miei clienti di prenotare facilmente, visualizzare i miei prodotti e conoscere la mia attività',
      obiettivo2: 'Domenico Monaci - 2020',
      img: fullPicMonaci,
      img2: Pic2Monaci,
      img3: Pic3Monaci,
      img4: PicMonaci,
      alt1: 'immagine che ritrae la locandine dell\'app di monacidomenico.lab',
      alt2: 'immagine che ritrae nuove sezioni dell\'app di monacidomenico.lab',
      alt3: 'immagine che ritrae la dark mode dell\'app di monacidomenico.lab',
      alt4: 'immagine che ritrae la nuova modalità di prenotazione dell\'app di monacidomenico.lab',
      tec6: mysqlpic  

    }
  }else if(params.name === 'magliozzi') {
    project =  {
      titolo: 'MAGLIOZZI GROUP',
      sottotitolo: 'Impresa di installazioni, assistenza e manutezioni su: Climatizzazione, Elettrico, Idraulico.',
      obiettivo: 'Ho bisogno di svecchiare il mio sito web, avrebbe bisogno di un redesign.',
      obiettivo2: 'Magliozzi Group - 2021',
      img: fullPicMagliozzi,
      img2: PicMagliozzi,
      img3: Pic2Magliozzi,
      img4: Pic3Magliozzi,
      alt1: 'immagine che ritrae la home di magliozzi-group.it',
      alt2: 'immagine che ritrae la sezione servizi di magliozzi-group.it',
      alt3: 'immagine che ritrae la sezione galleria di magliozzi-group.it',
      alt4: 'immagine che ritrae la sezione progetti di magliozzi-group.it',
    }
  }else if (params.name === 'freestyle') {
    project =  {
      sottotitolo: 'Negozio di abbigliamento, presso Nichelino (TO).',
      titolo: 'FREESTYLE CONCEPT STORE',
      obiettivo: 'Ho bisogno di far conoscere il mio brand per tutta Italia.',
      obiettivo2: 'freestyle concept store - 2022',
      img: fullPicFreestyle,
      img2: PicFreestyle,
      img3: Pic2Freestyle,
      img4: Pic3Freestyle,
      alt1: 'immagine che ritrae la home di freestyle concept store',
      alt2: 'immagine che ritrae la sezione contatti di freestyle concept store',
      alt3: 'immagine che ritrae il modulo di registrazione di freestyle concept store',
      alt4: 'immagine che ritrae la sezione carrello di freestyle concept store',
      tec6: mysqlpic
    }
  }else if (params.name === 'wearedifferent') {
    project =  {
      sottotitolo: 'Negozio di abbigliamento, presso Volla (NA).',
      titolo: 'WEAREDIFFERENT - BOUTIQUE',
      obiettivo: 'Ho bisogno di far conoscere il mio brand.',
      obiettivo2: 'wearedifferent - 2021',
      img: fullPicweare,
      img2: PicWeare,
      img3: Pic2Weare,
      img4: Pic3Weare,
      alt1: 'immagine che ritrae la home di wearedifferent - boutique',
      alt2: 'immagine che ritrae la sezione storia del negozio di wearedifferent - boutique',
      alt3: 'immagine che ritrae la sezione collezione di wearedifferent - boutique',
      alt4: 'immagine che ritrae la sezione collezione con i filtri di wearedifferent - boutique',
      tec6: mysqlpic
    }
  }

  // funzione visualizza modulo contatti
  const [showContatti, setShowContatti] = useState(false);

  const handleShow = () => {
      setShowContatti((prevState) => !prevState);
  }

  // testi alternativi e title per i tasti chiama e email
  const altChiama = 'tasto chiama per chiamare '
  const altEmail =  'tasto email per inviare email '
  const titleChiama = 'cliccando sarà possibile entrare in contatto con me via telefonicamente.'
  const titleEmail = 'cliccando il tasto sarai portato alla sezione contatti dove potrai inviare un email.'

  // immagini delle tecniche
  const tec  = html5
  const tec2 = css
  const tec3 = jspic
  const tec4 = phppic
  const tec5 = bt5

  // testo alternativo per le immagini
  const altTec1 = 'logo html 5'
  const altTec2 = 'logo css 3'
  const altTec3 = 'logo javascript'
  const altTec4 = 'logo php'
  const altTec5 = 'logo bootstrap 5'
  const altTec6 = 'logo mysql'

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
        <div className='container mt-5 mb-5'>
          <div className='row'>

            {
              project != null ?

              <>
              
              <div className='col-12 text-center'>

                <h1>{project.titolo}</h1>
                <span>{project.sottotitolo}</span>

              </div>

              <div className='col-12 mt-5 mb-5 text-center' data-aos="fade" data-aos-duration="3000">
                <img className="rounded shadow img-fluid" src={project.img} alt={project.alt1} width={'800px'} />
              </div>

              <hr/>

              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 p-5' data-aos="fade-down" data-aos-duration="1000">
                <h3 className='text-center'>Obiettivo</h3>
                <p>
                  “{project.obiettivo}”
                </p>
                <p className='text-end'>{project.obiettivo2}</p>
              </div>

              <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 mb-5' data-aos="fade-down" data-aos-duration="1000">
                <img className="rounded shadow img-fluid" src={project.img2} alt={project.alt2} width={'600px'} />
              </div>

              </>
              : <h1 className=''>nessun risultato trovato</h1>
            }

          </div>
        </div>
      </section>

      <section id="skills" className='skills'>

        {/* DIVIDER */}
        <div className="custom-shape-divider-top-1658328146">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
        </div>  

        <div className='container'>
          <div className='row text-center mt-5'>
          <h2 className="fst-italic text-white">Tecniche utilizzate</h2>
            <div className='col-12 mt-5 mb-5 text-center'>

              {
                <>
                  <img className="m-2" src={tec} width={'100px'} alt={altTec1}/>
                  <img className="m-2" src={tec2} width={'100px'} alt={altTec2}/>
                  <img className="m-2" src={tec3} width={'100px'} alt={altTec3}/>
                  <img className="m-2" src={tec4} width={'100px'} alt={altTec4}/>
                  <img className="m-2" src={tec5} width={'100px'} alt={altTec5}/>
                </>
              }

              { project.tec6 != null ?
                <img className="m-2" src={project.tec6} width={'100px'} alt={altTec6}/>
                : ''
              }
                  
              
            </div>
          </div>
        </div>

      </section>  

      {/* DIVIDER */}
      <div className="divider-58">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
      </div>  

      <section>

        <div className='container mt-5'>
          <div className='row'>
            
            {
              <>

                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 mb-5' data-aos="fade-down" data-aos-duration="1000">
                  <img className="rounded img-fluid shadow" src={project.img3} alt={project.alt3} />
                </div>

                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 mb-5' data-aos="fade-down" data-aos-duration="1000">
                  <img className="rounded img-fluid shadow" src={project.img4} alt={project.alt4}  />
                </div>

              </>
            }

            <hr className=''/>

            <div className='col-12 mt-5 text-center'>
              <h3> Hai bisogno di un Sito Web Professionale?</h3>
              <a type="button" className="fs-1 mt-3 btn btn-outline-danger mb-3 me-5 font-rintix" href="tel:+393281131848" alt={altChiama} title={titleChiama}>CHIAMA</a>
              <a type="button" className="fs-1 btn btn-outline-danger mt-3 mb-3 font-rintix" href="#contatti" alt={altEmail} title={titleEmail} onClick={handleShow}>EMAIL</a>
              
              { /* Animazione sul click del bottone */
                showContatti && 
                <div className='container text-center '>
                    <div className='row'>
                      <div className='col-6 mx-auto col-10 col-md-8 col-lg-6 p-5 rounded shadow form58'>
                        <Contatti/>
                      </div>
                    </div>
                </div>
              }

            </div>

          </div>
        </div>

      </section>  

      <Footer/>

    </>
  );
}

export default DettagliProjects;