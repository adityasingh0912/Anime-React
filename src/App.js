import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";
import FrontPsgr from "./Components/FrontPsgr";

function App() {
  
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/anime/:id" element={<AnimeItem />} />
          <Route path="/character/:id" element={<Gallery />} />
          <Route path="/front" element={<FrontPsgr />} />
        </Routes>
     </BrowserRouter>
        {/* <FrontPsgr/> */}
    </div>
   
  );
}

export default App;

