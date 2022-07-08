import { Link } from "react-router-dom"

function Drawer() {
    return(

        <div className="container">
            <div className="row">
                <div className="col-8 drawer">
                    <Link to="/">PLAY</Link>
                    <Link to="/RoadToElite">ROAD TO ELITE</Link>
                    <Link to="/GameMode">GAME MODES</Link>
                    <Link to="/MyElite">MY ELITE</Link>
                    <Link to="/Settings">SETTINGS</Link>
                </div>
            </div>
        </div>

    );
}

export default Drawer;