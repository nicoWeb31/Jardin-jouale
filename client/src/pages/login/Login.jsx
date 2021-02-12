import React from 'react';
import ButtonP from '../../components/button/ButtonP';
import './login.style.scss';

const Login = () => {
    //____________________________function____________________________________________________

    const onHandleSubmit = () => {};

    return (
        <div class="loginBlock">
            <h1>Connexion </h1>
            <form onSubmit={onHandleSubmit}>
                <input type="text" />

                <input type="password" />
                <ButtonP>
                    <button type="submit">Connexion</button>
                </ButtonP>
            </form>
        </div>
    );
};

export default Login;
