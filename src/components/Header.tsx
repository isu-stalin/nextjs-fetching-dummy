'use client'
import Link from 'next/link';

export default function Header() {
  return (
    <nav
      style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '16px 24px',
        display: 'flex',
        gap: '24px',
      }}
    >
      <Link href="/" style={linkStyle}>Home</Link>
      <Link href="/posts" style={linkStyle}>Posts</Link>
      <Link href="/users" style={linkStyle}>Users</Link>
      <Link href="/products" style={linkStyle}>Products</Link>
      <Link href="/comments" style={linkStyle}>Comments</Link>
      <Link href="/login" style={linkStyle}>Login</Link>
    </nav>
  );
}

const linkStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 500,
  textDecoration: 'none',
  color: '#1f2937',
  transition: 'color 0.2s ease-in-out',
};
