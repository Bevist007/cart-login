import React, { useState } from "react";
import "./App.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Hero({ handleLogout }) {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: "Apple MacBook Air (13-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB SSD) - Gold",
      cost: "Rs.92000",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024",
    },
    {
      name: "Beats in-ear studio earbuds",
      cost: "Rs.30000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hJJa_jzBSD2osYTTL3it7w5isjwkqfpBCQ&usqp=CAU",
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product != productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="hero">
      <nav>
        <h2>Shopping Cart</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}
export default Hero;
