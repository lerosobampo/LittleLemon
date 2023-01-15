import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Reservations from './pages/Reservations';
// IMAGES
import logo from './assets/Logo.svg';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li><img src={ logo } alt="" /></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li>Menu</li>
          <li><NavLink to="/reservations">Reservations</NavLink></li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/reservations" element={ <Reservations /> }/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
