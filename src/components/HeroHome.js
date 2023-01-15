import '../css/HeroHome.css'
import { NavLink } from 'react-router-dom';
//IMAGES
import hero from '../assets/restaurant.jpg';

export default function HomeHero() {
    return (
        <section className='hero-home-container'>
            <article className='hero-home-container1'>
                <h1 className='hero-home-h1'>Little Lemon</h1>
                <h2 className='hero-home-h2'>Chicago</h2>
                <p className='hero-home-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button><NavLink className='navLink-home' to="/reservations">Reserve a Table</NavLink></button>
            </article>
            <article className='hero-home-container1-image'>
                    <img className='hero-home-image' src={ hero } alt="" />
            </article>
        </section>
    )
}