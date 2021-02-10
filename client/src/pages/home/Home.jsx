import React from 'react';
import { Link } from 'react-router-dom';
import './home.style.scss';
import Tilt from '../../components/VanillaTilt';
import logo from '../../img/home/logo.png'

const Home = () => {
    const options = {
        speed: 200,
        max: 15,

    };

    return (
        <main className="mainHome">
            <img src={logo} alt="" className="logo"/>
            <div className="card-container">
                <div className="row1">
                    <Link to="/blog" className="navLink">
                        <Tilt options={options}>
                            <div className="card">
                                <h3>Le Blog</h3>
                                <i class="fas fa-pen-alt fa-5x"></i>
                            </div>
                        </Tilt>
                    </Link>

                    <Link to="/marche" className="navLink">
                        <Tilt options={options}>
                            <div className="card">
                                <h3>Le marché</h3>
                                <i class="fas fa-shopping-cart fa-5x"></i>
                            </div>
                        </Tilt>
                    </Link>
                </div>

                <div className="row2">
                    <Link to="/Jardinier" className="navLink">
                        <Tilt options={options}>
                            <div className="card">
                                <h3>Esapace Jardinier</h3>
                                <i class="fas fa-user fa-5x"></i>
                            </div>
                        </Tilt>
                    </Link>

                    <Link to="/contact" className="navLink">
                        <Tilt options={options}>
                            <div className="card">
                                <h3>Contact</h3>
                                <i class="fas fa-file-signature fa-5x"></i>
                            </div>
                        </Tilt>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Home;
