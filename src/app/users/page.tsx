export default async function Users() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h2>Users</h2>
      <ul>
        {data.users?.map((user: any) => (
          <li key={user.id}>
            <strong>{user.firstName}</strong>
            <p>{user.username}</p>
            <p>{user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
