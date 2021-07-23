import './App.css';
import {useState} from "react";

function App() {
    const [BreakLength, setBreakLength] = useState(5);
    const [SessionLength, setSessionLength] = useState(25);


    return (
        <div className="App">
            <div id="break-setup">
                <div id="break-label">{BreakLength}</div>
            </div>

            <div id="session-setup">
                <div id="session-label">{SessionLength}</div>
            </div>
        </div>
    );
}

export default App;
