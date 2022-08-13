
import './App.css';
import Home from './Components/Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Form from './Components/Pages/Forms/Form';
import My from './Components/Pages/Forms/My';
import Payment from './Components/Pages/Payment/Payment';
import Conditions from './Components/Pages/Conditions/Conditions';
import Privacy from './Components/Pages/Privacy/Privacy';
import WorkIdentity from './Components/Pages/WorkIdentity/WorkIdentity';
import Conrtact from './Components/Pages/Contact/Conrtact';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/car" element={<Form />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/add" element={<My />} />
          <Route path="/van" element={<Form />} />  
        <Route path="/bike" element={<Form />} />
        <Route path="/food" element={<Form />} />
        <Route path="/others" element={<Form />} /> 
         <Route path="/payment" element={<Payment/>} />
        <Route path="/conditions" element={<Conditions/>} />
        {/* <Route path="/privacy" element={<Privacy/>} /> */}
        <Route path="/privacy" element={<Conditions/>} />
        <Route path="/contact" element={<Conrtact/>} />
      </Routes>

    </div>
  );
}

export default App;
