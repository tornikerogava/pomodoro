import './App.css';
import {useState} from "react";

function App() {
    const [BreakLength, setBreakLength] = useState(5);
    const [SessionLength, setSessionLength] = useState(25);


    return (
        <div className="App">
            <div className="setup" id="break-setup">
                <div id="break-label">Break Length</div>
                <div id="break-length">{BreakLength}</div>
                <div id="break-buttons" className="setup-buttons">
                    <button id="break-increment" onClick={()=>setBreakLength(BreakLength+1)}>^</button>
                    <button id="break-decrement" onClick={()=>setBreakLength(BreakLength-1)}>v</button>
                </div>
            </div>

            <div className="setup" id="session-setup">
                <div id="session-label">Session Length</div>
                <div id="session-length">{SessionLength}</div>
                <div id="session-buttons" className="setup-buttons">
                    <button id="session-increment" onClick={()=>setSessionLength(SessionLength+1)}>^</button>
                    <button id="session-decrement" onClick={()=>setSessionLength(SessionLength-1)}>v</button>
                </div>
            </div>
        </div>
    );
}

export default App;
