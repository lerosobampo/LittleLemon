import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
// IMAGES
import logo from './assets/Logo.svg';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li><img src={ logo } alt="" /></li>
          <li><NavLink className='navLink' to="/">Home</NavLink></li>
          <li><NavLink className='navLink' to="/about">About</NavLink></li>
          <li><NavLink className='navLink' to="/menu">Menu</NavLink></li>
          <li><NavLink className='navLink' to="/reservations">Reservations</NavLink></li>
          <li><NavLink className='navLink' to="/orderOnline">Order Online</NavLink></li>
          <li><NavLink className='navLink' to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path='/menu' element={ <Menu /> } />
          <Route path="/reservations" element={ <Reservations /> }/>
          <Route path='/orderOnline' element={ <OrderOnline /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
