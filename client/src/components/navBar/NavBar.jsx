import React from 'react';
import ButtonP from '../button/ButtonP';
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
                    <button>Connexion</button>
                    <button>Inscription</button>
                </ButtonP>
            </div>
        </nav>
    );
};

export default NavBar;
