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
    return (
        <>

            <div className="row mb-5">

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                    <div class="skills2">
                        <li>
                            <h3><img src={html5} /></h3><span class="bar"><span class="shtml"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={css} /></h3><span class="bar"><span class="scss"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={jspic} /></h3><span class="bar"><span class="sjs"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={jquery} /></h3><span class="bar"><span class="sjquery"></span></span>
                        </li>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                    <div class="skills2">
                        <li>
                            <h3><img src={bt5} /></h3><span class="bar"><span class="velocita"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={tailpic} /></h3><span class="bar"><span class="creativita"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={reactpic} /></h3><span class="bar"><span class="affidabilita"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={npmpic} /></h3><span class="bar"><span class="conoscenza"></span></span>
                        </li>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="skills2">
                        <li>
                            <h3><img src={phppic} /></h3><span class="bar"><span class="velocita"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={mysqlpic} /></h3><span class="bar"><span class="creativita"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={ps} /></h3><span class="bar"><span class="affidabilita"></span></span>
                        </li>
                        
                        <li>
                            <h3><img src={gitpic} /></h3><span class="bar"><span class="conoscenza"></span></span>
                        </li>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Skills;