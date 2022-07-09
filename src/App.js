
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Slogan from './components/Slogan';
import Social from './components/Social';
import Projects from './components/Projects';

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
              <div className='col-12'>
                <Projects/>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
