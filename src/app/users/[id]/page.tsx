interface PageProps {
  params: {
    id: string;
  };
}

export default async function UserDetail({ params }: PageProps) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await res.json();

  return (
    <div style={{ padding: '40px', maxWidth: 800, margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          backgroundColor: '#fafafa',
          padding: '30px',
          borderRadius: 12,
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          style={{
            width: 150,
            height: 150,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <div>
          <h2 style={{ fontSize: 28, marginBottom: 10 }}>
            {user.firstName} {user.lastName}
          </h2>
          <p style={{ fontSize: 16, marginBottom: 5 }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ fontSize: 16, marginBottom: 5 }}>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p style={{ fontSize: 16, marginBottom: 5 }}>
            <strong>Age:</strong> {user.age}
          </p>
          <p style={{ fontSize: 16, marginBottom: 5 }}>
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>
      </div>
    </div>
  );
}
