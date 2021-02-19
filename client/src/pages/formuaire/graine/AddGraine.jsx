import React from 'react'
import './addGraine.style.scss';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ButtonP from '../../../components/button/ButtonP';
import {renderInput} from '../../../components/renderInput/RenderInput';




const AddGraine = ({ history, handleSubmit}) => {



    const onHandleSubmit = () =>{

    }


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
                                Retour :
                                <Link to="/admin" className="navLink">
                                    Mot de passe oublié ?
                                </Link>
                            </small>
                        </div>
                        <ButtonP>
                            <button
                                type="submit"
                                className="loginBtn"
                            >
                                <i className="fas fa-arrow-right"></i>
                                Ajouter
                            </button>
                        </ButtonP>
                    </form>
                </div>

        </div>
    )
}

export default reduxForm({ form: 'addGraine'})(AddGraine)
