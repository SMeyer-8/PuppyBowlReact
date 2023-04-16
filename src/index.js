import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";

    

const appElement = document.getElementById("app")
const root = createRoot(appElement)
//const BasicComponentNameHere = () => { return ( <div> <p>Hello World!</p></div>)}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)