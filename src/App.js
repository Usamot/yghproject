import Dashboard from "./frontend/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from "./frontend/Attendance";
import D_Class from "./frontend/D_Class";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Dashboard/>

      <Routes>

        {/* <Route path="/"  element={<Dashboard/>}/> */}
        <Route path="attendance"  element={<Attendance />}/>
        <Route path="d_class"  element={<D_Class/>}/>


      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
