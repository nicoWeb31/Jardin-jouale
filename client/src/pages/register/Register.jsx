import React from 'react';
import ButtonP from '../../components/button/ButtonP';

const Register = () => {




    //_________________________________________function________________________________
    const onHandleSubmit = (e) =>{
        
    }


    return (
        <div class="loginBlock">
            <h1>Nous Rejoindre !</h1>
            <form onSubmit={onHandleSubmit}>
                
                <input type="text" />

                <input type="password" />

                <input type="password" />



                <ButtonP>
                    <button type="submit">Inscription</button>
                </ButtonP>
            </form>
        </div>
    )
}

export default Register
