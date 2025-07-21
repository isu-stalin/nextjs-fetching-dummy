export default async function PostsPage() {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();

  return (
    <div style={{ padding: '40px', maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30 }}>Posts</h2>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        padding: 0,
        margin: 0,
      }}>
        {data.posts?.map((post: any) => (
          <li key={post.id} style={{
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: 10,
            padding: '20px',
            backgroundColor: '#fdfdfd',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>{post.title}</h3>
            <p style={{ fontSize: 14, color: '#444' }}>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
