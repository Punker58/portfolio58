import pmonaci from '../img/projects/monaci.jpg';
import pmagliozzi from '../img/projects/magliozzi.jpg';
import pfreestyle from '../img/projects/freestyle.jpg';
import psswdgenpy from '../img/projects/psswd-gen-py.png';
import pdifferent from '../img/projects/different.jpg';

function  Projects() {

    //array progetti
    let elements = [
        {aos:'fade-right', img:pmonaci, url:'https://play.google.com/store/apps/details?id=com.francescocastiello.domenicomonacilab'},
        {aos:'fade-left', img:pmagliozzi, url:'https://www.magliozzi-group.com/' },
        {aos:'fade-right', img:pfreestyle, url:'https://www.freestyleconceptstore.it/'},
        {aos:'fade-left', img:psswdgenpy, url:'https://github.com/Punker58/password-gen-by-castorino'}
        //{aos:'fade-left', img:pdifferent, url:'https://www.wearedifferentboutique.it/'}
    ];

    return(

        <>

            {elements.map(function(value, index){
                
                return <a className="p1" href={value.url}><figure id="figure" className="figure mt-5 mb-5" data-aos={value.aos} data-aos-duration="1000">
                                <img src={value.img} className="figure-img img-fluid rounded" alt="..."/>
                            </figure>
                        </a>
            })}

        </>
 
    );
}
export default Projects;