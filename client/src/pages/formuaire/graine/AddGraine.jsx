import React from 'react'
import './addGraine.style.scss';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ButtonP from '../../../components/button/ButtonP';
import FormRenderError from '../../../components/formRenderError/FormRenderError';


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
            <FormRenderError meta={formProps.meta}/>
        </div>
    );
};


const AddGraine = () => {
    return (
        <div>
            Ajouter une graine au catalogue
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
                        <hr />
                        <div className="reset">
                            <small>
                                Vous n'avez pas de compte :
                                <Link to="/register" className="navLink">
                                    créer compte
                                </Link>
                            </small>
                            <small>
                                Vous n'avez pas de compte :
                                <Link to="/forgotPassword" className="navLink">
                                    Mot de passe oublié ?
                                </Link>
                            </small>
                        </div>
                        <ButtonP>
                            <button
                                type="submit"
                                className="loginBtn"
                                // disabled={
                                //     valuesForm &&
                                //     !valuesForm.email &&
                                //     !valuesForm.password
                                // }
                            >
                                <i className="fas fa-arrow-right"></i>
                                Connexion
                            </button>
                        </ButtonP>
                    </form>
                </div>

        </div>
    )
}

export default AddGraine
