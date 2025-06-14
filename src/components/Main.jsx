import { useState } from "react";
import products from "./products";
import ProductCard from "./ProductCard";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [priceLimit, setPriceLimit] = useState(null);

  const categories = ["todos", ...new Set(products.map((item) => item.category))];
  const priceOptions = [200, 1000, 4000];

  // Filtrar produtos com base em categoria e preço
  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      selectedCategory === "todos" || item.category === selectedCategory;
    const priceMatch = priceLimit === null || item.price <= priceLimit;
    return categoryMatch && priceMatch;
  });

  return (
    <main>
      <h1>Catálogo de Produtos</h1>

      {/* Filtro por Categoria */}
      <div className="category-filters">
        <label htmlFor="category">Filtrar por categoria: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Preço */}
      <div className="price-filter-buttons">
        <p>Filtrar por preço máximo:</p>
        {priceOptions.map((limit) => (
          <button
            key={limit}
            onClick={() => setPriceLimit(limit)}
            className={priceLimit === limit ? "active" : ""}
          >
            Até R${limit}
          </button>
        ))}
        <button onClick={() => setPriceLimit(null)}>Limpar filtro</button>
      </div>

      {/* Lista de Produtos */}
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
