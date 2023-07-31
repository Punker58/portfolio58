import { useParams } from 'react-router-dom';
import logo from '../img/icon/logo.png'
import Back from '../img/x.svg'
import fullPicMonaci from '../img/monaci/1.jpg'
import PicMonaci from '../img/monaci/2.jpg'
import Pic2Monaci from '../img/monaci/3.jpg'
import Pic3Monaci from '../img/monaci/4.jpg'

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

  }
    
    return (
      <>
        <div className='container mt-5'>
          <div className='row'>

          </div>
        </div>

        <div className='container mt-5 mb-5'>
          <div className='row border border-danger border-2 p-5'>

            <div className='col-12 mb-5'>
              <div className='col-2 border border-danger rounded-pill'>
                <img src={Back} alt='...' width={'50px'}/>
                <span className='text-black'>TORNA INDIETRO</span>
              </div>
            </div>

            {
              project != null ?

              <>
              
              <div className='col-3'>

                <span className='font-merriWeather text-black mt-5'>Progetto</span>                
                <h4 className='text-black mb-3'>{project.progetto}</h4>

                <span className='font-merriWeather text-black'>Cliente</span>                
                <h4 className='text-black mb-3'>{project.cliente}</h4>

                <span className='font-merriWeather text-black'>Linguaggi, librerie ecc...</span>                
                <h4 className='text-black '>{project.linguaggi}</h4>

                <span className='font-merriWeather text-black'>Periodo</span>                
                <h4 className='text-black mb-5'>{project.periodo}</h4>

              </div>

              <div className='col text-center'>
                <img  className="rounded" src={project.img} alt='...' width={'800px'} />

                <hr class="border border-danger border-2 opacity-50"/>
                <img className='mt-5 ms-5 me-5 rounded' src={project.img2} alt='...' width={'200px'} />
                <img className='mt-5 ms-5 me-5 rounded' src={project.img3} alt='...' width={'200px'} />
                <img className='mt-5 ms-5 me-5 rounded' src={project.img4} alt='...' width={'200px'} />

              </div>

              </>
              : <h1 className='text-black'>nessun risultato trovato</h1>
            }

          </div>
        </div>


      </>
    );
}

export default DettagliProjects;