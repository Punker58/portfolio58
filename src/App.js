
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';
import Social from './components/Social';
import Projects from './components/Projects';
import Skills from './components/Skills';

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

              <div className='col-8'>
                <Slogan/>
              </div>

              <div className='col-4'>
                <Social/>
              </div>

            </div>

          </div>
          
        </section>

        <section className='projects'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">projects</h1>
              <div className='col-12 mt-5'>
                <Projects/>
              </div>
            </div>
          </div>
        </section>
        
        <section className='skills'>
          <div className='container'>
            <div className='row'>
            <h1 className="fst-italic">Skills</h1>
              <div className='col-12 mt-5'>
                <Skills/>
              </div>
            </div>
          </div>
        </section>        

      </div>
    </>
  );
}

export default App;
