import igpic from '../img/icon/ig.png';
import fbpic from '../img/icon/fb.png';
import rdpic from '../img/icon/reddit.png';
import ghpic from '../img/icon/github.png';

function  Social() {
    return(
        <>
            <div className="social float-end">
                <a><img className="img-fluid" src={igpic} alt="instagram"/></a>
                <a><img className="img-fluid" src={fbpic} alt="facebook"/></a>
                <a><img className="img-fluid" src={rdpic} alt="reddit"/></a>
                <a><img className="img-fluid" src={ghpic} alt="github"/></a>
            </div>
        </>
    );

}

export default Social;