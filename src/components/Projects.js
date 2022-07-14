import img1 from '../img/test.jpg';

function  Projects() {

    return(

        <>
                    
            <figure id="figure" class="figure mt-5 mb-5" data-aos="fade-right" data-aos-duration="2000">
                <img src={img1} class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption txt1 text-end text-uppercase">monaci domenico.lab</figcaption>
            </figure>

            <figure class="figure float-end mt-5 mb-5" data-aos="fade-left" data-aos-duration="2000">
                <img src={img1} class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption txt1 text-start text-uppercase">magliozzi group</figcaption>
            </figure>

            <figure class="figure mt-5 mt-5 mb-5" data-aos="fade-right" data-aos-duration="2000">
                <img src={img1} class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption txt1 text-end text-uppercase">wearedifferent - boutique</figcaption>
            </figure>

            <figure class="figure float-end mt-5 mb-5" data-aos="fade-left" data-aos-duration="2000"> 
                <img src={img1} class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption txt1 text-start text-uppercase">freestyle concept store</figcaption>
            </figure>

        </>
 
    );
}
export default Projects;