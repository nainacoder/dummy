import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
// import FirstPage from "./components/FirstPage";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  // console.log("login");

  return (
    <BrowserRouter>
      {/* <FirstPage /> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/productList" element={<ProductList />} />
        <Route exact path="/productDetails/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
