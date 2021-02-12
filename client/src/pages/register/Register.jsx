import React, { useEffect } from 'react';
import ButtonP from '../../components/button/ButtonP';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../redux/actions/authActions';

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
                type={formProps.type}
            />
            <label className="form__label">{formProps.label}</label>
            {renderError(formProps.meta)}
        </div>
    );
};

const Register = ({ history, handleSubmit }) => {
    const dispatch = useDispatch();
    const {
        registerForm: { values: valuesForm },
    } = useSelector((state) => state.form);
    const { loading, error, userInfo } = useSelector(
        (state) => state.userRegister
    );

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    //_________________________________________function________________________________
    const onHandleSubmit = () => {
        dispatch(register());
    };

    return (
        <div class="loginBlock">
            <div>
                {/* error from server TODO:*/}
                {error && <h3>{error}</h3>}
            </div>

            <div>{loading && <h3>loading......</h3>}</div>

            <div class="loginBlock">
                <h1>Connexion </h1>
                <div className="formulaire__form">
                    <form
                        onSubmit={handleSubmit(onHandleSubmit)}
                        className="form"
                    >
                        <Field
                            name="email"
                            component={renderInput}
                            label="Email"
                            placeholder="votre email !"
                        />

                        <Field
                            name="password"
                            type="password"
                            component={renderInput}
                            label="Password"
                            placeholder="votre password !"
                        />

                        <Field
                            name="passwordComfirm"
                            type="password"
                            component={renderInput}
                            label="Password"
                            placeholder="votre password !"
                        />

                        <hr />
                        <ButtonP>
                            <button
                                type="submit"
                                className="loginBtn"
                                disabled={
                                    valuesForm &&
                                    !valuesForm.email &&
                                    !valuesForm.password
                                }
                            >
                                <i className="fas fa-arrow-right"></i>
                                Inscription
                            </button>
                        </ButtonP>
                    </form>
                </div>
            </div>
        </div>
    );
};

const validate = (formValues) => {
    const errors = {};

    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            formValues.email
        ) !== true
    ) {
        errors.email = 'votre adresse email n\'est pas correct !';
    }
    if (!formValues.email) {
        errors.email = 'vous devez entrer votre mail !';
    }

    if (!formValues.password) {
        errors.password = 'vous devez entrer votre mail !';
    }

    if (formValues.passwordComfirm !== formValues.password ) {
        errors.passpasswordComfirmword = 'vos password ne sont pas identique';
    }

    return errors;
};

export default reduxForm({ form : 'registerForm', validate})(Register);
