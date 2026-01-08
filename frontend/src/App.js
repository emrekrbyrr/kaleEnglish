import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedScaffold from "./components/AnimatedScaffold";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Rental from "./pages/Rental";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <AnimatedScaffold />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/rental" element={<Rental />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
