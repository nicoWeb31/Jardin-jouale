import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './btnNav.style.scss';

const BtnNav = () => {

    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    className="navigation__checkbox"
                    id="navi-toggle"
                    checked={toggle}
                    onClick={toggleButton}
                />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span class="navigation__icon" aria-hidden="true">
                        &nbsp;
                    </span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link to="/home" className="navigation__link">Accueil</Link>
                        </li>
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link to="/blog" className="navigation__link">Le Blog</Link>
                        </li>
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link to="/marche" className="navigation__link">Le Marche</Link>
                        </li>
                        <li
                            className="navigation__item"
                            onClick={() => setToggle(false)}
                        >
                            <Link to="/marche" className="navigation__link">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BtnNav;
