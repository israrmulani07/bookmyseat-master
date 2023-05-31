// import { Home2 } from "./Components/Home2";
import "./Components/Common.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home3 } from "./Components/Home3";
import { Nav } from "./Component/Nav";
import { Home } from "./Component/Home";
import { Card, CardContent } from "@mui/material";
import { Shopping } from "./Component/Shopping";
function App() {
  return (
    <div className="main">
      {/* <Home2 /> */}
      {/* <Home3 /> */}
      <BrowserRouter>
        <Card>
          <CardContent>
            <Nav />
          </CardContent>
        </Card>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />

        </Routes>
      </BrowserRouter>


    </div >
  );
}

export default App;
