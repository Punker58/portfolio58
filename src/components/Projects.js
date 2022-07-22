import pmonaci from '../img/projects/monaci.jpg';
import pmagliozzi from '../img/projects/magliozzi.jpg';
import pfreestyle from '../img/projects/freestyle.jpg';
import pdifferent from '../img/projects/different.jpg';

function  Projects() {

    //array progetti
    let elements = [
        {name:'monaci domenico.lab', aos:'fade-right', img:pmonaci},
        {name:'magliozzi group', aos:'fade-left', img:pmagliozzi },
        {name:'wearedifferent - boutique', aos:'fade-right', img:pfreestyle},
        {name:'freestyle concept store', aos:'fade-left', img:pdifferent}
    ];

    return(

        <>

            {elements.map(function(value, index){
                
                return <figure id="figure" class="figure mt-5 mb-5" data-aos={value.aos} data-aos-duration="1000">
                        <img src={value.img} class="figure-img img-fluid rounded" alt="..."/>
                    </figure>
            })}

        </>
 
    );
}
export default Projects;