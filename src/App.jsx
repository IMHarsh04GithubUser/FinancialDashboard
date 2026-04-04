import { useContext } from "react";
import {AppContext} from "./appcontext/Appcontext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Display from "./layout/Display";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Insights from "./pages/Insights";
import "./index.css";

function App() {
  const { darkMode } = useContext(AppContext);
  return (
    <BrowserRouter>
      <div className={`flex h-screen overflow-hidden ${darkMode ? "body1" : "body"}`}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
