export default async function PostsPage() {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h2>Posts</h2>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}