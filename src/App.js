import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [current, setCurrent] = useState("Item 1")
    return (
        <div className="App">
            <nav className="tabNav">
                <a
                    href="#tab1"
                    className={current==="Item 1"? "tabHdr selected":"tabHdr"}
                    onClick={() => setCurrent("Item 1")}
                >Item 1</a>
                <a
                    href="#tab2"
                    className={current==="Item 2"? "tabHdr selected":"tabHdr"}
                    onClick={() => setCurrent("Item 2")}
                >Item 2</a>
            </nav>

            {/*  tab render*/}
            {
                current === "Item 1" && <div className="tabContent">
                    {current}
                </div>
            }
            {
                current === "Item 2" && <div className="tabContent">
                    {current}
                </div>
            }
        </div>
    );
}

export default App;
