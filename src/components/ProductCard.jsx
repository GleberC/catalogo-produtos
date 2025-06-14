export default function ProductCard({ product }) {
  const { name, category, price, image } = product;
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-brand">{category}</p>
        <p className="product-price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
}
