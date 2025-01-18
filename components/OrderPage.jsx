import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./OrderPage.css"; // Import your custom CSS file

const OrderPage = () => {
  const [food, setFood] = useState(""); // Selected food category
  const [subFood, setSubFood] = useState(""); // Selected sub-item
  const [quantity, setQuantity] = useState(1); // Quantity of the food
  const [address, setAddress] = useState(""); // Delivery address
  const navigate = useNavigate(); // Initialize the navigate function

  // Subcategories for each food category
  const subCategories = {
    Pizza: ["Margherita", "Pepperoni", "BBQ Chicken", "Veggie"],
    Burger: ["Cheeseburger", "Veggie Burger", "Chicken Burger", "Bacon Burger"],
    Pasta: ["Spaghetti Bolognese", "Penne Alfredo", "Fettuccine Carbonara", "Vegetable Lasagna"],
    Salad: ["Caesar Salad", "Greek Salad", "Garden Salad", "Cobb Salad"],
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order placed! \nFood: ${food} ${subFood ? `(${subFood})` : ""} \nQuantity: ${quantity} \nAddress: ${address}`
    );
    navigate("/"); // Navigate to the home page after order submission
  };

  return (
    <div className="order-page-container">
      <div className="order-form">
        <h1>Place Your Order</h1>

        <form onSubmit={handleSubmit}>
          {/* Food Selection */}
          <div className="mb-4">
            <label htmlFor="food">Select Food:</label>
            <select
              id="food"
              name="food"
              value={food}
              onChange={(e) => {
                setFood(e.target.value);
                setSubFood(""); // Reset subFood when a new category is selected
              }}
              required
            >
              <option value="">Choose a food</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Pasta">Pasta</option>
              <option value="Salad">Salad</option>
            </select>
          </div>

          {/* Sub-Food Selection (Dynamic) */}
          {food && subCategories[food] && (
            <div className="mb-4">
              <label htmlFor="subFood">Select Type of {food}:</label>
              <select
                id="subFood"
                name="subFood"
                value={subFood}
                onChange={(e) => setSubFood(e.target.value)}
                required
              >
                <option value="">Choose a type of {food}</option>
                {subCategories[food].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity Selection */}
          <div className="mb-4">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              max="10"
              required
            />
          </div>

          {/* Delivery Address */}
          <div className="mb-4">
            <label htmlFor="address">Delivery Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="4"
              placeholder="Enter your delivery address"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
