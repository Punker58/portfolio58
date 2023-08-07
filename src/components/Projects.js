import pmonaci from '../img/projects/monaci.png'
import pmagliozzi from '../img/projects/magliozzi_group.png'
import pfreestyle from '../img/projects/freestyle.png'
import pdifferent from '../img/projects/wearedifferent.png'
import ppsswdgen from '../img/projects/password_gen_python.png'
import pcaffe from '../img/projects/prepare_caffe.png'
import ppfivem from '../img/projects/fivem.png'

//array progetti
let elements = [
    { id:'fmonaci', alt: 'Immagine del progetto Monacidomenico.lab salone di barbieri a Volla, Napoli.', img:pmonaci, url:'dettagli-progetto/monaci'},
    { id:'fmagliozzi', alt: 'Immagine del progetto Magliozzi-group srl a Volla, Napoli.',img:pmagliozzi,  url:'dettagli-progetto/magliozzi' },
    { id:'ffreestyle', alt: 'Immagine del progetto freestyle concept store, negozio di abbigliamento Torino.',img:pfreestyle,  url:'dettagli-progetto/freestyle'},
    { id:'fdifferent', alt: 'Immagine del progetto wearedifferent - boutique, negozio di abbigliamento a Volla, Napoli',img:pdifferent,  url:'dettagli-progetto/wearedifferent'},
    { id:'fpsswdgen', alt: 'Immagine del progetto password generator python ',img:ppsswdgen  },
    { id:'fcaffe', alt: 'Immagine del progetto prepare il caffe, esercizio fatto in react js ', img:pcaffe  },
    { id:'ffivem', alt: 'Immagine del progetto Fivem che porta alla costruzione di un server fivem italiano',img:ppfivem }    
];
    
function  Projects() {

    return(

        <>

            <div className='text-center' data-aos="fade" data-aos-duration="3000">
            {elements.map(function(value, index){
                
                return (index <= 3)? <a key={index} href={value.url} className="p1" ><figure id={value.id} className="figure mt-5 mb-5 ms-3 me-3">
                                <img src={value.img} className="figure-img img-fluid" alt={value.alt}/>
                            </figure>
                        </a>
                        :null
            })}
            
            <hr className='text-black'/>

            
                {elements.map(function(value, index){
                    
                    return (index > 3 && index <= 6)? <span key={index} className="p1"><figure id={value.id} className="figure mt-5 mb-5 ms-3 me-3">
                                    <img src={value.img} className="figure-img img-fluid" alt={value.alt}/>
                                </figure>
                            </span>
                            :null
                })}
            </div>

        </>
 
    );
}
export default Projects;