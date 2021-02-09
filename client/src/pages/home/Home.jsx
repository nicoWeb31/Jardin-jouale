import React from 'react';
import { Link } from 'react-router-dom';
import './home.style.scss';

const Home = () => {
    return (
        <main className="mainHome">
            <div className="card-container">
                <div className="card">le marché</div>
                <div className="card">Decouvir les Jardins de la joualle</div>
                <div className="card">Espace Jardinier</div>

                <Link to="/contact" className="navLink">
                    <div className="card">
                        <h3> Nous Contacter</h3>

                        <i class="fas fa-file-signature fa-3x"></i>
                    </div>
                </Link>
            </div>
        </main>
    );
};

export default Home;
