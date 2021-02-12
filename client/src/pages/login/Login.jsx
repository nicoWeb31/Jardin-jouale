import React from 'react';
import ButtonP from '../../components/button/ButtonP';
import './login.style.scss';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

//_________________________________render input______________________________________

const renderError = (meta) => {
    if (meta.error && meta.touched) {
        return <small className="errorMess">{meta.error}</small>;
    }
};

const renderInput = (formProps) => {
    return (
        <div className="form__group">
            <input
                {...formProps.input}
                autoComplete="off"
                placeholder={formProps.placeholder}
                className={`${
                    formProps.meta.touched
                        ? formProps.meta.error
                            ? 'inpuTError'
                            : 'inputOK'
                        : ''
                }  form__input `}
            />
            <label className="form__label">{formProps.label}</label>
            {renderError(formProps.meta)}
        </div>
    );
};

const Login = () => {
    //____________________________function____________________________________________________

    const onHandleSubmit = () => {};

    return (
        <div className="loginPage">
            <div class="loginBlock">
                <h1>Connexion </h1>
                <div className="formulaire__form">
                    <form onSubmit={onHandleSubmit} className="form">
                        <Field
                            name="email"
                            component={renderInput}
                            label="Email"
                            placeholder="votre email !"
                        />

                        <Field
                            name="password"
                            component={renderInput}
                            label="Password"
                            placeholder="votre password !"
                        />
                        <hr />
                        <ButtonP>
                            <button type="submit" className="loginBtn">
                                <i className="fas fa-arrow-right"></i>
                                Connexion
                            </button>
                        </ButtonP>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default reduxForm({ form: 'loginForm' })(Login);
