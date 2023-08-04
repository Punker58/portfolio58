import html5 from '../img/html.png'
import css from '../img/css.png'
import jquery from '../img/jquery.png'
import jspic from '../img/js.png'
import bt5 from '../img/bootstrap.png'
import tailpic from '../img/tailwind.png'
import reactpic from '../img/react.png'
import npmpic from '../img/npm.png'
import phppic from '../img/php.png'
import laravelpic from '../img/laravel.png'
import mysqlpic from '../img/mysql.png'
import ps from '../img/ps.png'
import gitpic from '../img/git.png'
import mongopic from '../img/mongo.png'
import bulmapic from '../img/bulma.png'
import pythonpic from '../img/python.png'
import luapic from '../img/lua.png'
import electronpic from '../img/electron.png'
import flaskpic from '../img/flask.png'

function Skills() {

    //array progetti
    let elements = [
        {img: html5, class:'shtml'},
        {img: css, class:'shtml'},
        {img: jspic, class:'sjs'},
        {img: jquery, class:'sjs'},
        {img: gitpic, class:'shtml'},
        {img: ps, class:'sreactpic'}, 
        {img: tailpic, class:'shtml'},
        {img: bulmapic, class:'shtml'},
        {img: npmpic, class:'shtml'},
        {img: bt5, class:'shtml'},
        {img: reactpic, class:'sjs'},
        {img: flaskpic, class:'sreactpic'},   
        {img: laravelpic, class:'shtml'},
        {img: phppic, class:'shtml'},
        {img: pythonpic, class:'shtml'},
        {img: mysqlpic, class:'shtml'},
        {img: luapic, class:'shtml'},
        {img: electronpic, class:'sreactpic'},
        {img: mongopic, class:'shtml'}
    ];

    return (
        <>

            <div className="row mb-5">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        {elements.map(function(value, index){

                            return (index <= 5)?
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

                            return (index > 5 && index <= 12)?
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

                            return (index > 12 && index < 20)?
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