import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InnerAbout from "./components/InnerAbout";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import OurPlateforms from "./components/OurPlateforms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/innerabout" element={<InnerAbout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      {/* <OurPlateforms /> */}
    </>
  );
}

export default App;
