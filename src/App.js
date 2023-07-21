//IMPORT
import React from 'react';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';
import Social from './components/Social';
import Lavoro from './components/lavoro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

// AOS ANIMATION
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once:true
});


function App() {
  return (
    <>
      <div>

        <section className='home'>
          <div className='container'>
            <div className='row'>

              <div className='col-12'>
                <Navbar/>
              </div>

              <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                <Slogan/>
              </div>

              <div className='col'>
                <Social/> 
              </div>

              <div className='scroll col-12'>
                <a className='font-merriWeather' href="#lavoro"><span></span><span></span><span></span></a>
              </div>

            </div>

          </div>
          
        </section>

        <section id="lavoro">
          <div className='container'>
            <div className='row'>
              <Lavoro/>
            </div>
          </div>
        </section>

        <hr className='text-black'/>

        <section id="progetti" className='projects'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">progetti</h1>
              <div className='col-12 mt-5'>
                <Projects/>
              </div>
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
            <div className='row'>
            <h1 className="fst-italic">Skills</h1>
              <div className='col-12 mt-5'>
                <Skills/>
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

        <section id="chisono" className='about'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">chi sono</h1>
              <div className='col-12 mt-5'>
                <About/>
              </div>
            </div>
          </div>
        </section> 

        <hr className='text-black'/>

        <section id="contatti" className='contatti '>
          <div className='container text-center '>
              <h1 className="fst-italic">contattami</h1>
              <div className='row'>
                <div className='col-6 mx-auto col-10 col-md-8 col-lg-6 p-5 rounded font-merriWeather shadow'>
                    <Contatti/>
                  </div>
                </div>
              </div>
        </section>

        <Footer/>      

      </div>
    </>
  );
}

export default App;
