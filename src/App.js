//IMPORT
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';
import Social from './components/Social';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

// AOS ANIMATION
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration:3000,
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

              <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8'>
                <Slogan/>
              </div>

              <div className='col-4'>
                <Social/>
              </div>

            </div>

          </div>
          
        </section>

        <section id="projects" className='projects'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">projects</h1>
              <div className='col-12 mt-5'>
                <Projects/>
              </div>
            </div>
          </div>
        </section>
        
        <section id="skills" className='skills'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">Skills</h1>
              <div className='col-12 mt-5'>
                <Skills/>
              </div>
            </div>
          </div>
        </section>       

        <section id="about" className='about'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">about me</h1>
              <div className='col-12 mt-5'>
                <About/>
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
