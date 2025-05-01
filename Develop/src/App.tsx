// src/App.tsx
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import './index.css'; // Ensure global styles are applied

export default function App() {
  return (
    <>
      <header className= "site-header">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
