import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;