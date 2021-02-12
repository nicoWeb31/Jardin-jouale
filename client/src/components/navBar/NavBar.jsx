import React, { usEffect } from 'react';
import ButtonP from '../button/ButtonP';
import { Link } from 'react-router-dom';
import './navBar.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';

const NavBar = () => {
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.userLogin);

    //_______________________function__________________________________

    const handleClickLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navBar">
            <div className="nav-header">
                <div class="nav-title">Jardin de la joualle</div>
                {/* <img src={logo} alt="" className="logo"/> */}
            </div>

            <div className="nav-links">
                <ButtonP>
                    {userInfo && userInfo ? (
                        <>
                            <span>Hello {userInfo && userInfo.name}</span>
                            <Link to="/profile">
                                <button>Compte</button>
                            </Link>

                                <button onClick={handleClickLogout}>
                                    Déconexion
                                </button>

                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button>Connexion</button>
                            </Link>

                            <Link to="/register">
                                <button>Inscription</button>
                            </Link>
                        </>
                    )}
                </ButtonP>
            </div>
        </nav>
    );
};

export default NavBar;
