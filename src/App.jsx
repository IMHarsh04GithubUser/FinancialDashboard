import "./App.css";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Display from "./layout/Display";
function App() {
  return (
    <>
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
