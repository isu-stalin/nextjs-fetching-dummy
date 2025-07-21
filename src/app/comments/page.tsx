export default async function CommentsPage() {
  const res = await fetch('https://dummyjson.com/comments');
  const data = await res.json();

  return (
    <div style={{ padding: '40px', maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30 }}>Comments</h2>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        padding: 0,
        margin: 0,
      }}>
        {data.comments?.map((comment: any) => (
          <li key={comment.id} style={{
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: 10,
            padding: '20px',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          }}>
            <p style={{ fontSize: 14, color: '#333' }}>{comment.body}</p>
            <p style={{ fontSize: 12, color: '#777', marginTop: 10 }}>User ID: {comment.user.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
