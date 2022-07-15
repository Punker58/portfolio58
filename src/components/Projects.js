import img1 from '../img/test.jpg';

function  Projects() {

    //array progetti
    let elements = [
        {name:'monaci domenico.lab', aos:'fade-right'},
        {name:'magliozzi group', aos:'fade-left'},
        {name:'wearedifferent - boutique', aos:'fade-right'},
        {name:'freestyle concept store', aos:'fade-left'}
    ];

    return(

        <>

            {elements.map(function(value, index){
                
                return <figure id="figure" class="figure mt-5 mb-5" data-aos={value.aos} data-aos-duration="1000">
                        <img src={img1} class="figure-img img-fluid rounded" alt="..."/>
                        <figcaption class="figure-caption txt1 text-end text-uppercase">{value.name}</figcaption>
                    </figure>
            })}

        </>
 
    );
}
export default Projects;