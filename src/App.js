import "./App.css";
import { Navbar } from "./Components/Index";
import { Home } from "./Pages/Home/Home";
import { ProductListingPage } from "./Pages/ProductListingPage/ProductListingPage";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/product-listing" element={<ProductListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
