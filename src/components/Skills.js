import html5 from '../img/html.png';
import css from '../img/css.png';
import jquery from '../img/jquery.png';
import jspic from '../img/js.png'; 
import bt5 from '../img/bootstrap.png';
import tailpic from '../img/tailwind.png';
import reactpic from '../img/react.png';
import npmpic from '../img/npm.png';
import phppic from '../img/php.png';
import mysqlpic from '../img/mysql.png';
import ps from '../img/ps.png';
import gitpic from '../img/git.png';

function Skills() {

    //array progetti
    let elements = [
        {img: html5, class:'shtml'},
        {img: css, class:'shtml'},
        {img: jspic, class:'sjs'},
        {img: jquery, class:'sjs'},
        {img: bt5, class:'shtml'},
        {img: tailpic, class:'sjs'},
        {img: reactpic, class:'sreactpic'},
        {img: npmpic, class:'shtml'},
        {img: phppic, class:'shtml'},
        {img: mysqlpic, class:'shtml'},
        {img: ps, class:'sreactpic'},
        {img: gitpic, class:'shtml'}		
    ];

    return (
        <>

            <div className="row mb-5">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        {elements.map(function(value, index){

                            return (index <= 3)?
                                    <li>
                                        <h3><img src={value.img} alt='...' /></h3><span className="bar"><span className={value.class}></span></span>
                                    </li>
                                :null

                        })}


                    </div>
                </div>   

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        {elements.map(function(value, index){

                            return (index > 3 && index <= 7)?
                                    <li>
                                        <h3><img src={value.img} alt='...' /></h3><span className="bar"><span className={value.class}></span></span>
                                    </li>
                                :null

                        })}


                    </div>
                </div>  

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        {elements.map(function(value, index){

                            return (index > 7 && index < 12)?
                                    <li>
                                        <h3><img src={value.img} alt='...' /></h3><span className="bar"><span className={value.class}></span></span>
                                    </li>
                                :null

                        })}


                    </div>
                </div>                

            </div>

        </>
    )
}

export default Skills;