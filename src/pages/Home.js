import '../css/Home.css';
//COMPONENTS
import HeroHome from '../components/HeroHome';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Information from '../components/Information';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <HeroHome />
            <Specials />
            <Testimonials />
            <Information />
            <Footer />
        </div>
    )
}