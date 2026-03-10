import { useState } from 'react'
import React from 'react'

import './App.css'
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Product Search & Filter</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '0.5rem', width: '60%', marginRight: '0.5rem' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {filteredProducts.map((p) => (
            <li key={p.id} style={{ marginBottom: '0.5rem' }}>
              {p.name} - {p.category} - ₹{p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App
