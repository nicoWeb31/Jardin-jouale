import React, { useEffect } from 'react';
import ButtonP from '../../components/button/ButtonP';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../redux/actions/authActions';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import '../../form.style.scss';
import './register.style.scss';
import FormRenderError from '../../components/formRenderError/FormRenderError';


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
            <FormRenderError meata={formProps.meta}/>
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
            toast.success(`nous somme heureux de te compter parmit nous ${userInfo.name}`);
            history.push('/');
        }

        if(error) {
            toast.error(error)
        }
    }, [history, userInfo,error]);

    //_________________________________________function________________________________
    const onHandleSubmit = () => {


        dispatch(register({
            name:valuesForm.name,
            email: valuesForm.email,
            password: valuesForm.password,
        }));
    };

    return (
        <div className="registerPage">
            <div>
                {/* error from server TODO:*/}
                {error && <h3>{error}</h3>}
            </div>

            <div>{loading && <h3>loading......</h3>}</div>

            <div class="formBlock">
                <h1>Nous Rejoindre</h1>
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
                            name="name"
                            component={renderInput}
                            label="votre nom"
                            placeholder="votre nom !"
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
                            label="Password Comfiration"
                            placeholder="Comfirmation password !"
                        />

                        <hr />
                        <small>
                            vous n'avez pas de compte :
                            <Link to="/login">conexion</Link>
                        </small>
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
    console.log(
        '🚀 ~ file: Register.jsx ~ line 119 ~ validate ~ formValues',
        formValues
    );
    const errors = {};

    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            formValues.email
        ) !== true
    ) {
        errors.email = "votre adresse email n'est pas correct !";
    }

    if (!formValues.email) {
        errors.email = 'vous devez entrer votre mail !';
    }

    if (!formValues.name) {
        errors.name = 'vous devez entrer votre nom !';
    }
    if (formValues.passwordComfirm !== formValues.password) {
        errors.passwordComfirm = 'vos password ne sont pas identique';
        errors.password = 'vos password ne sont pas identique';
    }

    if (!formValues.password) {
        errors.password = 'vous devez entrer un mots de passe  !';
    }

    if (!formValues.passwordComfirm) {
        errors.passwordComfirm = 'vous devez confirmer votre mdp !';
    }

    return errors;
};

export default reduxForm({ form: 'registerForm', validate })(Register);
