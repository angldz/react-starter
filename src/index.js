import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import SoloProjectOne from './SoloProjectOne/SoloProjectOne';
// import AirbnbExProject from './AirbnbExProject/AirbnbExProject';
// import SoloProjectTwo from './SoloProjectTwo';

// ReactDOM.render(<App />, document.getElementById("root"))

// ReactDOM.render(<SoloProjectOne></SoloProjectOne>, document.getElementById("root"))

// ReactDOM.render(<AirbnbExProject></AirbnbExProject>, document.getElementById("root"))

// ReactDOM.render(<SoloProjectTwo></SoloProjectTwo>, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
