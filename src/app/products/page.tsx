import Link from 'next/link';

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return (
    <div style={{ padding: '40px', maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30 }}>Products</h2>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '30px',
        padding: 0,
        margin: 0
      }}>
        {data.products?.map((product: any) => (
          <li key={product.id} style={{
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: 12,
            padding: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}>
            <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }}
                />
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{product.title}</h3>
                <p style={{ fontSize: 16, fontWeight: 500 }}>${product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}