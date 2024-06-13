import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ListOfProducts from "./Pages/ListOfProducts";
import AdminDashboard from "./Components/AdminDashboard";
import ManageProducts from "./Pages/ManageProducts";
import ManageUsers from "./Pages/ManageUsers";


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ListOfProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/manageProducts" element={<ManageProducts />} />
      <Route path="/manageUsers" element={<ManageUsers />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
