export default async function Comments() {
  const res = await fetch('https://dummyjson.com/comments');
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h2>Comments</h2>
      <ul>
        {data.comments.map((comments: any) => (
          <li key={comments.id}>
            <strong>{comments.title}</strong>
            <p>{comments.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
