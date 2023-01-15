import '../css/Information.css'
//IMAGES
import info from '../assets/restaurantChef.jpg';

export default function Information() {
    return (
        <section className='info-container'>
            <article className='info-container1'>
                <h1 className='info-h1'>Little Lemon</h1>
                <h2 className='info-h2'>Chicago</h2>
                <p className='info-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </article>
            <article className='info-container1-image'>
                    <img className='info-image' src={ info } alt="" />
            </article>
        </section>
    )
}