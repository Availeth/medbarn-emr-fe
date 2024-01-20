import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Dashboard/Patients/Patients";
import Surrogates from "./components/Dashboard/Surrogates/Surrogates";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Addpat from "./components/Dashboard/Patients/Addpat";
import Addsurr from "./components/Dashboard/Surrogates/Addsurr";


function App() {
  return (
    <>
        <Navbar />
          <Router>
        <Routes>
          <Route path="/" element={ <Signin/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/surrogates" element={<Surrogates />} />
          <Route path="/add-surrogates" element={<Addsurr />} />
          <Route path="/add-patients" element={<Addpat />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
