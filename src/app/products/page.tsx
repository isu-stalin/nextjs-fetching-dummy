export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {data.products?.map((product: any) => (
          <li key={product.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: 8, listStyle: "none" }}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 4 }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}