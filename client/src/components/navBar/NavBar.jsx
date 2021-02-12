import React from 'react';
import ButtonP from '../button/ButtonP';
import { Link } from 'react-router-dom';
import './navBar.style.scss';

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="nav-header">
                <div class="nav-title">Jardin de la joualle</div>
                {/* <img src={logo} alt="" className="logo"/> */}
            </div>

            <div className="nav-links">
                <ButtonP>
                    <Link to="/login">
                        <button>Connexion</button>
                    </Link>

                    <Link to='/register'>
                        <button>Inscription</button>
                    </Link>
                </ButtonP>
            </div>
        </nav>
    );
};

export default NavBar;
