import { useParams } from 'react-router-dom';
import logo from '../img/icon/logo.png'
import fullPicMonaci from '../img/monaci/1.jpg'

function DettagliProjects() {
    const params = useParams()
    
    return (
      <>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12'>
              <img src={logo} alt='...' width={'100px'}/>
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className='row border border-danger border-2 p-5'>

            <div className='col-3'>

              <span className='font-merriWeather text-black mt-5'>Progetto</span>                
              <h3 className='text-black mb-3'>web app/ sito web</h3>

              <span className='font-merriWeather text-black'>Cliente</span>                
              <h3 className='text-black mb-3'>Monacidomenico.lab</h3>

              <span className='font-merriWeather text-black'>Linguaggi, framework, librerie ecc...</span>                
              <h3 className='text-black '>HTML</h3>
              <h3 className='text-black '>CSS</h3>
              <h3 className='text-black '>BOOTSTRAP</h3>
              <h3 className='text-black '>PHP</h3>
              <h3 className='text-black mb-5'>JAVASCRIPT</h3>

              <span className='font-merriWeather text-black'>Periodo</span>                
              <h3 className='text-black mb-5'>2021 - ORA</h3>

            </div>

            <div className='col text-center mt-5'>
              <img  className="rounded " src={fullPicMonaci} alt='...' width={'800px'} />

              <hr class="border border-danger border-2 opacity-50"/>
              <img className='ms-5 me-5' src={logo} alt='...' width={'150px'} />
              <img className='ms-5 me-5' src={logo} alt='...' width={'150px'} />
              <img className='ms-5 me-5' src={logo} alt='...' width={'150px'} />

            </div>


          </div>
        </div>


      </>
    );
}

export default DettagliProjects;