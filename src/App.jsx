import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

const App = () => {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<AllPlayers/>}>
                    
                </Route>
                <Route path="/puppy/:id" element={<SinglePlayer/>}></Route>
            </Routes>
        </div>
    )
}

export default App