import html5 from '../img/skills/html.svg'
import css from '../img/skills/css.svg'
import jquery from '../img/skills/jquery.svg'
import jspic from '../img/skills/js.svg'
import bt5 from '../img/skills/bootstrap.svg'
import tailpic from '../img/skills/tailwind_css.svg'
import reactpic from '../img/skills/reactpic.svg'
import npmpic from '../img/skills/npm.svg'
import phppic from '../img/skills/php.svg'
import laravelpic from '../img/skills/mysql.svg'
import mysqlpic from '../img/skills/mysql.svg'
import ps from '../img/skills/photoshop.svg'
import gitpic from '../img/skills/git.svg'
import mongopic from '../img/skills/mongodb.svg'
import bulmapic from '../img/skills/bulma.svg'
import pythonpic from '../img/skills/python.svg'
import luapic from '../img/skills/lua.svg'
import electronpic from '../img/skills/electron.svg'
import flaskpic from '../img/skills/flask.svg'

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