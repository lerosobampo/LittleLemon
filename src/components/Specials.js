import '../css/Specials.css'
// IMAGES
import dish from '../assets/greekSalad.jpg';

export default function Specials() {
    return (
        <div>
            {/* SPECIALS 1 */}
            <section className='specials1-container'>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </section>
            {/* SPECIALS 2 */}
            <section className='specials2-container'>
                <article className='specials2-container1'>
                    <img className='specials2-image' src={ dish } alt='' />
                    <h2>Dish Name</h2>
                    <h2>$$$$</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
                <article className='specials2-container1'>
                    <img className='specials2-image' src={ dish } alt='' />
                    <h2>Dish Name</h2>
                    <h2>$$$$</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
                <article className='specials2-container1'>
                    <img className='specials2-image' src={ dish} alt='' />
                    <h2>Dish Name</h2>
                    <h2>$$$$</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
            </section>
        </div>
    )
}