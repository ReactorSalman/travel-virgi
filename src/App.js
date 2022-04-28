import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="hotel-details" element={<HotelDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;