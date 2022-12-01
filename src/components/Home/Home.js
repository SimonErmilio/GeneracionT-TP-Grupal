import React from 'react'
import Footer from '../footer/Footer';
import Inicio from '../inicio/Inicio'
import Nav from '../Nav/Nav';
import './Home.css'

function Home() {
    return (
        <div className='hola'>
        <Nav/>
        <Inicio />
        <Footer />
        </div>
      );
}

export default Home