import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import OrderPage from "./features/menu/pages/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Menu</Link>
        <Link to="/order">Place Order</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;