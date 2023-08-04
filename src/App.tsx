import React from 'react';
import Main from "./Main"
import './App.css';
import FakturaProvider from "./Data";


function App() {
    return (
        <div className="App">
            <FakturaProvider>
                <Main/>
            </FakturaProvider>
        </div>
    );
}
export default App;