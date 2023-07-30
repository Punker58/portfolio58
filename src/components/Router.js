import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DettagliProjects from '../pages/DettagliProjects';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio58" element={<Home/>}></Route>
                <Route path="dettagli-progetto/:name" element={<DettagliProjects/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;