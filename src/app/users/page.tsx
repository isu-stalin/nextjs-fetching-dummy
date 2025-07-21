import Link from 'next/link';

export default async function UsersPage() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();

  return (
    <div style={{ padding: '40px', maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30 }}>Users</h2>
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
        gap: '30px',
        padding: 0,
        margin: 0
      }}>
        {data.users?.map((user: any) => (
          <li key={user.id} style={{
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: 12,
            padding: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Link href={`/users/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={user.image}
                    alt={user.firstName}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: 10,
                    }}
                  />
                </div>
                <h3 style={{ fontSize: 18, margin: '10px 0' }}>
                  {user.firstName} {user.lastName}
                </h3>
                <p style={{ fontSize: 14, color: '#555' }}>{user.email}</p>
              </div>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}
