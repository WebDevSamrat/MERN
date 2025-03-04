import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import { WorkoutsContextProvider } from "./context/WorkoutContext";


import App from "./App";


ReactDOM.render( 
            <WorkoutsContextProvider>
                <App />
            </WorkoutsContextProvider>,

    document.getElementById("root")
);