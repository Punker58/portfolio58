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
import mongopic from '../img/mongo.png';
import bulmapic from '../img/bulma.png';
import pythonpic from '../img/python.png';

function Skills() {

    //array progetti
    let elements = [
        {img: html5, class:'shtml'},
        {img: css, class:'shtml'},
        {img: jspic, class:'sjs'},
        {img: jquery, class:'sjs'},
        {img: gitpic, class:'shtml'},
        {img: bt5, class:'shtml'},
        {img: tailpic, class:'sjs'},
        {img: bulmapic, class:'shtml'},
        {img: npmpic, class:'shtml'},
        {img: ps, class:'sreactpic'},
        {img: reactpic, class:'sreactpic'},
        {img: phppic, class:'shtml'},
        {img: pythonpic, class:'sreactpic'},
        {img: mysqlpic, class:'shtml'},
        {img: mongopic, class:'shtml'}
    ];

    return (
        <>

            <div className="row mb-5">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        {elements.map(function(value, index){

                            return (index <= 4)?
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

                            return (index > 4 && index <= 9)?
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

                            return (index > 9 && index < 15)?
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