import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../image/omar-quazi-9n4MxbuTMX4-unsplash.jpg'
import image2 from '../image/gary-meulemans-0NoK8Ez0s44-unsplash.jpg'
import image3 from '../image/paul-varnum-nsxHZZUALvM-unsplash.jpg'
import image4 from '../image/frances-gunn-QcBAZ7VREHQ-unsplash.jpg'
import ControlledCarousel from './Carousel'
import { Link } from 'react-router-dom'


export default function NavBar() {
    const [active, setActive] = useState('all')
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-padding">
                <Container className='custom-padding'>
                    <Navbar.Brand href="#home">Coutries</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='justify-content-end flex-grow-1 gap-2'>
                            <Link to="/home" className={`${active === 'all' ? 'current' : ''} nav-link` } onClick={() => {setActive("all")}}>All</Link>
                            <Link to="/asia" className={`${active === 'asia' ? 'current' : ''} nav-link` } onClick={() => {setActive("asia")}}>Asia</Link>
                            <Link to="/europe" className={`${active === 'europe' ? 'current' : ''} nav-link` } onClick={() => {setActive("europe")}}>Europe</Link>
                            <Link to="/" className={`nav-link`}>Sign out</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='row d-flex Top-heading'>
                    <h1 className='col text-with-lines-h'>Welcome</h1>
                </div>
                <div className="row d-flex mb-4 slider-main">
                    <div className="col-sm-9 text-black custom-heigth">
                        <ControlledCarousel image={[image2, image3, image4]} />
                    </div>
                    <div className="col-sm-3 text-black custom-heigth">
                        <div style={{ width: "100%", height: '100%', border: "1px solid black" }}>
                            <img src={image1} alt="sideimage" style={{ height: '100%', width: '100%' }} />
                        </div>
                    </div>
                </div>
        </>
    )
}
