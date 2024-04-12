import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Login from './Components/Login'
import Register from "./Components/Register";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
