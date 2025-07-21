// src/app/products/[id]/page.tsx

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div style={{ padding: '40px', maxWidth: 1000, margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
          backgroundColor: '#fafafa',
          padding: '30px',
          borderRadius: 12,
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: 350,
            height: 350,
            borderRadius: 12,
            objectFit: 'cover',
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 28, marginBottom: 15 }}>{product.title}</h2>
          <p style={{ fontSize: 16, marginBottom: 10 }}>{product.description}</p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#333',
              marginBottom: 10,
            }}
          >
            ${product.price}
          </p>
          <p style={{ fontSize: 16, color: '#f39c12' }}>
            Rating: {product.rating}
          </p>
          <button
            style={{
              marginTop: 20,
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
