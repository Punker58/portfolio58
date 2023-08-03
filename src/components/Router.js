import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DettagliProjects from '../pages/DettagliProjects';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CookiePolicy from '../pages/CookiePolicy';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio58" element={<Home/>}></Route>
                <Route path="/dettagli-progetto/:name" element={<DettagliProjects/>}></Route>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
                <Route path="/cookie-policy" element={<CookiePolicy/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;