import '../css/Footer.css';
//IMAGES
import logo from '../images/Logo.svg';

export default function Footer() {
    return (
        <section className='footer-container'>
            <article className='footer-container1'>
                <img className='footer-image' src={ logo } alt="" />
            </article>
            <article className='footer-container1'>
                <h2>Doormat Navigation</h2>
                <p>Home</p>
                <p>About</p>
                <p>Login</p>
            </article>
            <article className='footer-container1'>
                <h2>Contact</h2>
                <p>Address</p>
                <p>Phone number</p>
                <p>email</p>
            </article>
            <article className='footer-container1'>
                <h2>Social Media</h2>
                <p>Address</p>
                <p>Phone number</p>
                <p>email</p>
            </article>
        </section>
    )
}