
import './App.css';
import Home from './Components/Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Form from './Components/Pages/Forms/Form';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carFrom" element={<Form />} />
        
      </Routes>

    </div>
  );
}

export default App;
