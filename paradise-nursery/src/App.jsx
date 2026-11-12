import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";
function Home() {
  return <main className="landing-page">
    <section className="hero-card">
      <h1>Paradise Nursery</h1>
      <p>Where green meets serenity</p>
      <Link className="primary-button" to="/products">Get Started</Link>
    </section>
    <AboutUs />
  </main>;
}
export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/cart" element={<CartItem />} />
    <Route path="*" element={<Home />} />
  </Routes>;
}
