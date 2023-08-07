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
        {img: html5, class: 'shtml', alt: 'logo html 5'},
        {img: css,  class: 'shtml', alt: 'logo css 3'},
        {img: jspic, class: 'sjs', alt: 'logo javacript'},
        {img: jquery, class: 'sjs', alt: 'logo jquery'},
        {img: gitpic, class: 'shtml', alt: 'logo git'},
        {img: ps, class: 'sreactpic', alt: 'logo photoshop 2023'}, 
        {img: tailpic, class: 'shtml', alt: 'logo tailwind css'},
        {img: bulmapic, class: 'shtml', alt: 'logo bulma css'},
        {img: npmpic, class: 'shtml', alt: 'logo npm'},
        {img: bt5, class: 'shtml', alt: 'logo bootstrap 5'},
        {img: reactpic, class: 'sjs', alt: 'logo react js'},
        {img: flaskpic, class: 'sreactpic', alt: 'logo flask'},   
        {img: laravelpic, class: 'shtml', alt: 'logo laravel'},
        {img: phppic, class: 'shtml', alt: 'logo php'},
        {img: pythonpic, class: 'shtml', alt: 'logo python'},
        {img: mysqlpic, class: 'shtml', alt: 'logo mysql'},
        {img: luapic, class: 'shtml', alt: 'logo lua'},
        {img: electronpic, class: 'sreactpic', alt: 'logo electron.js'},
        {img: mongopic, class: 'shtml', alt: 'logo mongodb'}
    ];

    return (
        <>

            <div className="row mb-5" data-aos="fade" data-aos-duration="3000">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        <ul>
                            {elements.map(function(value, index){

                                return (index <= 5)?
                                        <li key={index}>
                                            <h3><img src={value.img} alt={value.alt} /></h3><span className="bar"><span className={value.class}></span></span>
                                        </li>
                                    :null

                            })}
                        </ul>

                    </div>
                </div>   

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        <ul>
                            {elements.map(function(value, index){

                                return (index > 5 && index <= 12)?
                                        <li key={index}>
                                            <h3><img src={value.img} alt={value.alt} /></h3><span className="bar"><span className={value.class}></span></span>
                                        </li>
                                    :null

                            })}
                        </ul>

                    </div>
                </div>  

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto mb-5">
                    <div className="skills2">

                        <ul>
                            {elements.map(function(value, index){

                                return (index > 12 && index < 20)?
                                        <li key={index}>
                                            <h3><img src={value.img} alt={value.alt} /></h3><span className="bar"><span className={value.class}></span></span>
                                        </li>
                                    :null

                            })}
                        </ul>

                    </div>
                </div>                

            </div>

        </>
    )
}

export default Skills;