import igpic from '../img/icon/ig.png';
import fbpic from '../img/icon/fb.png';
import rdpic from '../img/icon/reddit.png';
import ghpic from '../img/icon/github.png';
import linkedinpic from '../img/icon/linkedin.png';

function  Social() {
    return(
        <>
            <div className="social float-end">
                <a href="https://www.instagram.com/punker58/"><img className="img-fluid" src={igpic} alt="instagram"/></a>
                <a href="https://www.facebook.com/straightedge58"><img className="img-fluid" src={fbpic} alt="facebook"/></a>
                <a href="https://www.reddit.com/user/Punker58"><img className="img-fluid" src={rdpic} alt="reddit"/></a>
                <a href="https://github.com/Punker58"><img className="img-fluid" src={ghpic} alt="github"/></a>
                <a href="https://www.linkedin.com/in/francesco-castiello-pk58/"><img className="img-fluid" src={linkedinpic} alt="linkedin"/></a>
            </div>
        </>
    );

}

export default Social;