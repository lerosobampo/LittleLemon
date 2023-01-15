import React, { Fragment } from 'react';
import '../css/Home.css';
//COMPONENTS
import HeroConstruction from '../components/HeroConstruction';
import Construction from '../components/Construction';
import Footer from '../components/Footer';

export default function Login() {
    return (

        <Fragment>

            <HeroConstruction />
            <Construction />
            <Footer />

        </Fragment>
    )
}