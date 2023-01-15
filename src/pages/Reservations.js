//COMPONENTS
import ReservationsHero from "../components/HeroReservations";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

export default function Reservations() {
    return (

        <section className="reservations">

            <ReservationsHero />
            <BookingForm />
            <Footer />

        </section>
    )
}