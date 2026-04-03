import {useContext} from "react"
import { AppContext } from "./appcontext/Appcontext.jsx";
import "./App.css";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Display from "./layout/Display";
import "./index.css"


function App() {
  const {darkMode} = useContext(AppContext)
  return (
    <>
    <body className={darkMode ? "body1" : "body"}/>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <div className="flex-1 overflow-auto">
            <Display />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
