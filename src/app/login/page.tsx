'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setMsg(` Login success! Token: ${data.token}`);
    } else {
      setMsg(' Login failed!');
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        maxWidth: 400,
        margin: '50px auto',
        padding: 30,
        border: '1px solid #ccc',
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Login</h2>

      <div style={{ marginBottom: 15 }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: 5,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: 5,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#0070f3',
          color: 'white',
          fontSize: 16,
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Login
      </button>

      {msg && (
        <p style={{ marginTop: 20, textAlign: 'center', color: '#333' }}>{msg}</p>
      )}
    </form>
  );
}
