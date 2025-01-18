import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Dishes from "./components/Dishes";
import Review from "./components/Review";
import LoginPage from "./components/LoginPage";
import OrderPage from "./components/OrderPage";  // Import OrderPage component
import CrispyDishes from "./components/CrispyDishes";
import DeliciousDishes from "./components/DeliciousDishes";
import SpicyDishes from "./components/SpicyDishes";
import TastyDishes from "./components/TastyDishes";
import SignUpPage from "./components/SignUpPage";
const App = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar is displayed on all pages */}

      <main>
        {/* Define routes for different pages */}
        <Routes>
          {/* Main sections of the site */}
          <Route
            path="/"
            element={
              <div>
                <div id="home">
                  <Home />
                </div>

                <div id="dishes">
                  <Dishes />
                </div>

                <div id="about">
                  <About />
                </div>

                <div id="menu">
                  <Menu />
                </div>

                <div id="review">
                  <Review />
                </div>
              </div>
            }
          />

          {/* Login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Order page */}
          <Route path="/ordernow" element={<OrderPage />} />

          <Route path="/spicy-dishes" element={<SpicyDishes />} />
          <Route path="/tastydishes" element={<TastyDishes />} />
          <Route path="/delicious-dishes" element={<DeliciousDishes />} />
          <Route path="/crispy-dishes" element={<CrispyDishes />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>
      </main>

      <Footer />  {/* Footer is displayed on all pages */}
    </Router>
  );
};

export default App;
