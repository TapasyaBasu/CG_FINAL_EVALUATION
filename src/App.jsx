import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Counter from "@/Components/Counter";
import TodoList from "./components/TodoList";
import RegistrationForm from "./components/RegistrationForm";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <nav
        style={{
          background: "#222",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white" }}>
          Products
        </Link>
      </nav>

      <Counter />

      <TodoList />

      <RegistrationForm />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;