import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SoloProjectOne from './SoloProjectOne/SoloProjectOne';
import AirbnbExProject from './AirbnbExProject/AirbnbExProject';
import SoloProjectTwo from './SoloProjectTwo';
import CatProject from './CatProject/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<App />} />
                <Route path='/' element={<App />} />
                <Route path='/about' element={<SoloProjectOne />} />
                <Route path='/airbnb' element={<AirbnbExProject />} />
                <Route path='/travel' element={<SoloProjectTwo />} />
                <Route path='/cats' element={<CatProject />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
