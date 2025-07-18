export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: 'flex', gap: 20, padding: 20 }}>
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
          <a href="/users">Users</a>
          <a href="/products">Products</a>
          <a href="/comments">Comments</a>
          <a href="/login">Login</a>
        </nav>
        {children}
      </body>
    </html>
  )
}