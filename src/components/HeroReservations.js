import '../css/HeroReservations.css'
//IMAGES
import hero from '../assets/restaurant.jpg';

export default function ReservationsHero() {
    return (
        <section className='hero-reservations-container'>
            <article className='hero-reservations-container1'>
                <h1 className='hero-reservations-h1'>Reserve your table</h1>
                <h2 className='hero-reservations-h2'>Chicago</h2>
                <p className='hero-reservations-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <article className='hero-reservations-container1-image'>
                    <img className='hero-reservations-image' src={ hero } alt="" />
            </article>
        </section>
    )
}