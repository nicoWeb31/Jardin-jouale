import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ButtonP from '../../components/button/ButtonP';
import '../../form.style.scss';
import { forgotPass } from '../../redux/actions/authActions';



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
                type={formProps.type}
            />
            <label className="form__label">{formProps.label}</label>
            {renderError(formProps.meta)}
        </div>
    );
};

const ForgotPassword = ({ history, handleSubmit }) => {
    const dispatch = useDispatch();
    const {
        forgotPassForm: { values: valuesForm },
    } = useSelector((state) => state.form);

    const {error,loading} = useSelector((state) => state.forgotPassword);


    //____________________________function____________________________________________________

    const onHandleSubmit = () => {
        dispatch(forgotPass(valuesForm));
        history.push('/login')
    };

    return (
        <div className="loginPage">
            <div>
                {/* error from server TODO:*/}
                {error && <h3>{error}</h3>}
            </div>

            <div>{loading && <h3>loading......</h3>}</div>

            <div class="loginBlock">
                <h1>Mot de passe oublier</h1>
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

                        <hr />
                        <p>
                            Vous allez recevoir un mail de recuperation de mots de passe!, cliquer sur le lien et suivre les instructions.
                        </p>
                        <ButtonP>
                            <button
                                type="submit"
                                className="loginBtn"
                                disabled={
                                    valuesForm &&
                                    !valuesForm.email

                                }
                            >
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

const validate = (formValues) => {
    const errors = {};

    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            formValues.email
        ) !== true
    ) {
        errors.email = 'votre adresse email a un problème !';
    }
    if (!formValues.email) {

        errors.email = 'vous devez entrer votre mail !';
    }

    return errors;
};

export default reduxForm({ form: 'forgotPassForm', validate })(ForgotPassword);