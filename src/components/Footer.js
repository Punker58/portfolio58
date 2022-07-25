import igpic from '../img/icon/ig.png';
import fbpic from '../img/icon/fb.png';
import ghpic from '../img/icon/github.png';
import linkedinpic from '../img/icon/linkedin.png';

function Footer() {
    return(
        <>

            <footer>
                <div className="container text-break text-center mt-5">
                    <div className="row">

                        <div className="col-12 mt-5 pfooter">
                            <a href="https://www.facebook.com/straightedge58"><img src={fbpic}/></a>
                            <a href="https://www.instagram.com/punker58/"><img src={igpic}/></a>
                            <a href="https://www.linkedin.com/in/francesco-castiello-pk58/"><img src={linkedinpic}/></a>
                            <a href="https://github.com/Punker58"><img src={ghpic}/></a>
                        </div>

                        <div className="col-12 mt-1 mb-5 ">
                            <p>
                                ©2022 Francesco Castiello<br/>
                                Tutti i diritti riservati
                            </p>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;