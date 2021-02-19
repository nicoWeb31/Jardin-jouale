import React from 'react';
import './addGraine.style.scss';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ButtonP from '../../../components/button/ButtonP';
import { renderInput } from '../../../components/renderInput/RenderInput';

const AddGraine = ({ history, handleSubmit }) => {
    const onHandleSubmit = () => {};

    return (
        <div className="AddGrainePage">
            <h1>Ajouter une graine au catalogue</h1>
            <div className="formulaire__form">
                <form onSubmit={handleSubmit(onHandleSubmit)} className="form">
                    <Field
                        name="legume"
                        component={renderInput}
                        label="Legume"
                        placeholder="ex : tomate !"
                        type="text"
                    />

                    <Field
                        name="cultivar"
                        type="text"
                        component={renderInput}
                        label="cultivar"
                        placeholder="ex : green-zebra !"
                    />

                    <Field
                        name="startSemis"
                        type="date"
                        component={renderInput}
                        label="debut du semis"
                        placeholder="ex : dd/mm/yyyy !"
                    />

                    <Field
                        name="endSemis"
                        type="date"
                        component={renderInput}
                        label="Fin du semis"
                        placeholder="ex : dd/mm/yyyy !"
                    />

                    <Field
                        name="quantity"
                        type="number"
                        component={renderInput}
                        label="Quantités"
                        placeholder="ex : 1234"
                    />

                    <Field
                        name="comment"
                        type="text"
                        component={renderInput}
                        label="Commentaire"
                        placeholder="ex : balibalo  dans son... !"
                    />

                    <hr />
                    <div className="reset">
                        <small>
                            <Link to="/admin/graine" className="navLink">
                                retour
                            </Link>
                        </small>

                    </div>
                    <ButtonP>
                        <button type="submit" className="loginBtn">
                            <i className="fas fa-arrow-right"></i>
                            Ajouter
                        </button>
                    </ButtonP>
                </form>
            </div>
        </div>
    );
};

export default reduxForm({ form: 'addGraine' })(AddGraine);
