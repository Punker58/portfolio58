import { useParams, useNavigate  } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import fullPicMonaci from '../img/monaci/1.jpg'
import PicMonaci from '../img/monaci/2.jpg'
import Pic2Monaci from '../img/monaci/3.jpg'
import Pic3Monaci from '../img/monaci/4.jpg'

import fullPicMagliozzi from '../img/magliozzi/1.jpg'
import PicMagliozzi from '../img/magliozzi/2.jpg'
import Pic2Magliozzi from '../img/magliozzi/3.jpg'
import Pic3Magliozzi from '../img/magliozzi/4.jpg'

import fullPicFreestyle from '../img/freestyle/1.jpg'
import PicFreestyle from '../img/freestyle/2.jpg'
import Pic2Freestyle from '../img/freestyle/3.jpg'
import Pic3Freestyle from '../img/freestyle/4.jpg'

import fullPicweare from '../img/wearedifferent/1.jpg'
import PicWeare from '../img/wearedifferent/2.jpg'
import Pic2Weare from '../img/wearedifferent/3.jpg'
import Pic3Weare from '../img/wearedifferent/4.jpg'

import html5 from '../img/html.png';
import css from '../img/css.png';
import jspic from '../img/js.png'; 
import bt5 from '../img/bootstrap.png';
import phppic from '../img/php.png';
import mysqlpic from '../img/mysql.png';

function DettagliProjects() {
  const params = useParams()
  let project = null

  if(params.name === 'monaci') {
    project =  {
      progetto: 'web app / sito web',
      cliente: 'monacidomenico.lab',
      linguaggi: 'HTML, CSS, BOOTSTRAP, PHP, JAVASCRIPT',
      periodo: '2021 - ORA',
      img: fullPicMonaci,
      img2: PicMonaci,
      img3: Pic2Monaci,
      img4: Pic3Monaci,
    }
  }else if(params.name === 'magliozzi') {
    project =  {
      progetto: 'sito web',
      cliente: 'magliozzi-group.it',
      linguaggi: 'HTML, CSS, BOOTSTRAP, PHP, JAVASCRIPT',
      periodo: '2021',
      img: fullPicMagliozzi,
      img2: PicMagliozzi,
      img3: Pic2Magliozzi,
      img4: Pic3Magliozzi,
    }
  }else if (params.name === 'freestyle') {
    project =  {
      progetto: 'sito web',
      cliente: 'freestyleconceptstore.it',
      linguaggi: 'HTML, CSS, BOOTSTRAP, PHP, JAVASCRIPT',
      periodo: '2022',
      img: fullPicFreestyle,
      img2: PicFreestyle,
      img3: Pic2Freestyle,
      img4: Pic3Freestyle,
    }
  }else if (params.name === 'wearedifferent') {
    project =  {
      progetto: 'sito web',
      cliente: 'wearedifferentboutique',
      linguaggi: 'HTML, CSS, BOOTSTRAP, PHP, JAVASCRIPT',
      periodo: '2021',
      img: fullPicweare,
      img2: PicWeare,
      img3: Pic2Weare,
      img4: Pic3Weare,
    }
  }


  let elements = [
    { img:html5, },
    { img:css },
    { img:jspic } 
];
    
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

                <h1 className='text-black'>MONACIDOMENICO.LAB</h1>
                <span className='text-black  font-merriWeather'>Salone di barbieri, presso Volla (NA).</span>

              </div>

              <div className='col-12 mt- mb-5 text-center'>
                <img className="rounded " src={project.img} alt='...' width={'800px'} />
              </div>

              <hr class="text-black"/>

              <div className='col-6 mt-5 p-5'>
                <h3 className='text-black text-center'>Obiettivo</h3>
                <p className='font-merriWeather text-black'>
                  “Ho bisogno di un’app che permetta ai miei clienti di prenotare facilmente,
                  visualizzare i miei prodotti e conoscere la mia attività”
                </p>
                <p className='text-end text-black font-merriWeather'>Domenico Monaci - 2020</p>
              </div>

              <div className='col-6 mt-5 mb-5'>
                <img className="rounded " src={project.img} alt='...' width={'600px'} />
              </div>

              </>
              : <h1 className='text-black'>nessun risultato trovato</h1>
            }

          </div>
        </div>
      </section>

      <section id="skills" className='skills'>

        {/* DIVIDER */}
        <div class="custom-shape-divider-top-1658328146">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
            </svg>
        </div>  

        <div className='container'>
          <div className='row text-center mt-5'>
          <h2 className="fst-italic ">Tecniche utilizzate</h2>
            <div className='col-12 mt-5 mb-5 text-center'>

            {elements.map(function(value){     
                return <img src={value.img} width={'100px'} alt='...'/>
            })}

            </div>
          </div>
        </div>

      </section>  

      {/* DIVIDER */}
      <div class="divider-58">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>
      </div>  


      <section>

        <div className='container mt-5'>
          <div className='row'>
            
            <div className='col-6 mt-5 mb-5'>
              <img className="rounded " src={project.img} alt='...' width={'600px'} />
            </div>

            <div className='col-6 mt-5 pt-5 text-center'>
              <h3 className='text-black '>Visita il progetto</h3>
                <a className="font-merriWeather text-black " href='https://play.google.com/store/apps/details?id=com.francescocastiello.domenicomonacilab&hl=it&gl=IT'>
                  https://play.google.com/monacidomenicolab
                </a>
            </div>

            <hr className='text-black'/>

            <div className='col-12 mt-5 text-center'>
              <h3 className='font-merriWeather text-black'> Hai bisogno di un Sito Web Professionale?</h3>
              <a type="button" className="fs-1 mt-3 btn btn-outline-danger mb-3 me-5 text-black" href="tel:+393281131848">CHIAMA</a>
              <a type="button" className="fs-1 btn btn-outline-danger mt-3 mb-3 text-black" href="#contatti">EMAIL</a>
            </div>


          </div>
        </div>

      </section>  

      <Footer/>

    </>
  );
}

export default DettagliProjects;