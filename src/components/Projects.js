import pmonaci from '../img/projects/monaci.png';
import pmagliozzi from '../img/projects/magliozzi_group.png';
import pfreestyle from '../img/projects/freestyle.png';
import pdifferent from '../img/projects/wearedifferent.png';
import ppsswdgen from '../img/projects/password_gen_python.png';
import pcaffe from '../img/projects/prepare_caffe.png';
import ppfivem from '../img/projects/fivem.png';


    //array progetti
    let elements = [
        { img:pmonaci, url:'https://play.google.com/store/apps/details?id=com.francescocastiello.domenicomonacilab'},
        { img:pmagliozzi, url:'https://www.magliozzi-group.com/' },
        { img:pfreestyle, url:'https://github.com/Punker58/freestyle-torino'},
        { img:pdifferent, url:'https://github.com/Punker58/freestyle-torino'},
        { img:ppsswdgen, url:'https://github.com/Punker58/freestyle-torino'},
        { img:pcaffe, url:'https://github.com/Punker58/freestyle-torino'},
        { img:ppfivem, url:'https://github.com/Punker58/freestyle-torino'}    
    ];
    
function  Projects() {

    return(

        <>

            {elements.map(function(value, index){
                
                return (index <= 3)? <a className="p1" href={value.url}><figure id="figure" className="figure mt-5 mb-5 ms-3 me-3"  data-aos-duration="1000">
                                <img src={value.img} className="figure-img img-fluid rounded" alt="..."/>
                            </figure>
                        </a>
                        :null
            })}
            
            <hr className='text-black'/>

            <div className='text-center'>
                {elements.map(function(value, index){
                    
                    return (index > 3 && index <= 6)? <a className="p1" href={value.url}><figure id="figure" className="figure mt-5 mb-5 ms-3 me-3"  data-aos-duration="1000">
                                    <img src={value.img} className="figure-img img-fluid rounded" alt="..."/>
                                </figure>
                            </a>
                            :null
                })}
            </div>



        </>
 
    );
}
export default Projects;