import React from 'react';
import './navBar.style.scss';

const NavBar = () => {
    return (
        <nav className="navBar">


                <div className="nav-header">
                    <div class="nav-title">Jardin de la joualle</div>
                </div>

                <div className="nav-links">
                    <a href="//github.io/jo_geek" target="_blank">
                        Connexion
                    </a>
                    <a
                        href="http://stackoverflow.com/users/4084003/"
                        target="_blank"
                    >
                        Inscription
                    </a>


                </div>
        </nav>
    );
};

export default NavBar;
