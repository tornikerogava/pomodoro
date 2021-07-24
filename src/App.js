import './App.css';
import {useState} from "react";

function App() {
    const [BreakLength, setBreakLength] = useState(5);
    const [SessionLength, setSessionLength] = useState(25);
    const [CurrentTimer, setCurrentTimer] = useState("Session");

    const HandleIncrementation = (type) => {
        switch (type) {
            case "break-up":
                if (BreakLength <= 59) {
                    setBreakLength(BreakLength + 1);
                }
                break;
            case "break-down":
                if (BreakLength > 1) {
                    setBreakLength(BreakLength - 1);
                }
                break;
            case "session-up":
                if (SessionLength <= 59) {
                    setSessionLength(SessionLength + 1);
                }
                break;
            case "session-down":
                if (SessionLength > 1) {
                    setSessionLength(SessionLength - 1);
                }
                break;
        }
    }


    return (
        <div className="App">
            <div className="setup" id="break-setup">
                <div id="break-label">Break Length</div>
                <div id="break-length">{BreakLength}</div>
                <div id="break-buttons" className="setup-buttons">
                    <button id="break-increment" onClick={() => HandleIncrementation("break-up")}>Increase</button>
                    <button id="break-decrement" onClick={() => HandleIncrementation("break-down")}>Decrease</button>
                </div>
            </div>

            <div className="setup" id="session-setup">
                <div id="session-label">Session Length</div>
                <div id="session-length">{SessionLength}</div>
                <div id="session-buttons" className="setup-buttons">
                    <button id="session-increment" onClick={() => HandleIncrementation("session-up")}>Increase</button>
                    <button id="session-decrement" onClick={() => HandleIncrementation("session-down")}>Decrease
                    </button>
                </div>
            </div>

            <div id="timer">
                <div id="timer-label">{CurrentTimer}</div>
                <div id="time-left"></div>
            </div>
        </div>
    );
}

export default App;
