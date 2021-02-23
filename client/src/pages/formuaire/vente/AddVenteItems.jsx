import React, { useEffect } from 'react';
import '../addGraine.style.scss';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ButtonP from '../../../components/button/ButtonP';
import { renderInput } from '../../../components/renderInput/RenderInput';
import { useDispatch, useSelector } from 'react-redux';
import { AddVenteItems } from '../../../redux/actions/venteItemsActions';
import { toast } from 'react-toastify';

const AddGraine = ({ history, handleSubmit }) => {
    const dispatch = useDispatch();

    const { addItemsVente } = useSelector((state) => state.form);
    const { error, success } = useSelector((state) => state.addItemsVente);

    useEffect(() => {
        if (success) {
            toast.success(
                `${addItemsVente.values.nom} a été ajouter avec succsé`
            );
            history.push('/admin/produitVente');
        }

        if (error) {
            toast.error(error.message);
        }
    }, [success, history, error]);

    const onHandleSubmit = () => {
        dispatch(AddVenteItems(addItemsVente.values));
    };

    return (
        <div className="AddGrainePage">
            {/* {error && toast.error(error)} */}
            <h1>Ajouter un Produit </h1>
            <div className="formulaire__form">
                <form onSubmit={handleSubmit(onHandleSubmit)} className="form">
                    <Field
                        name="name"
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

                    <label className="form__label">Categorie ?</label>
                    <div className = "form__group ">
                        <Field name="category" component="select" className="form__input">
                            <option value="none" select>None</option>
                            <option value="legume">Legume</option>
                            <option value="plant">Plant</option>

                        </Field>
                    </div>

                    <Field
                        name="quantity"
                        type="number"
                        component={renderInput}
                        label="Quantités"
                        placeholder="ex : 1234"
                    />

                    <Field
                        name="description"
                        type="text"
                        component={renderInput}
                        label="Commentaire"
                        placeholder="ex : tomate Rouge !!! !"
                    />

                    {/* TODO: AJOUTER LE FIELD PHOTO */}

                    <hr />
                    <div className="reset">
                        <ButtonP>
                            <Link to="/admin/graine">
                                <button className="loginBtn">
                                    <i className="fas fa-arrow-left"></i>
                                    retour
                                </button>
                            </Link>
                        </ButtonP>
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

const validate = (formValues) => {
    const errors = {};

    if (!formValues.legume) {
        errors.legume = 'vous devez entrer votre un nom de legume !';
    }

    if (!formValues.cultivar) {
        errors.cultivar = 'vous devez entrer un cultivar !';
    }

    if (!formValues.quantity) {
        errors.quantity = 'vous devez entrer une quantités !';
    }

    return errors;
};

export default reduxForm({ form: 'addItemsVente', validate })(AddGraine);
