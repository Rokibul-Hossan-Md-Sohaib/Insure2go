
import './App.css';
import Home from './Components/Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Form from './Components/Pages/Forms/Form';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Form />} />
        <Route path="/van" element={<Form />} /> 
        <Route path="/bike" element={<Form />} />
        <Route path="/food" element={<Form />} />
        <Route path="/others" element={<Form />} />
        <Route path="/terms" element={''} />
        <Route path="/privacy" element={''} />
      </Routes>

    </div>
  );
}

export default App;
