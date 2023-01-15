import React, { Fragment } from 'react';
import '../css/Home.css';
//COMPONENTS
import HeroConstruction from '../components/HeroConstruction';
import Construction from '../components/Construction';
import Footer from '../components/Footer';

export default function OrderOnline() {
    return (

        <Fragment>

            <HeroConstruction />
            <Construction />
            <Footer />

        </Fragment>
    )
}