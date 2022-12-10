import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddHotel from "./pages/AddHotel/AddHotel";
import AddHotelBrand from "./pages/AddHotel/AddHotelBrand";
import Update from "./pages/AddHotel/Update";
function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/register" element={<AddHotel />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/addbrand/:id" element={<AddHotelBrand />} />

        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
