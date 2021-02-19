import React, { useEffect } from 'react';
import './addGraine.style.scss';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ButtonP from '../../../components/button/ButtonP';
import { renderInput } from '../../../components/renderInput/RenderInput';
import { useDispatch, useSelector } from 'react-redux';
import { seedDetailAction } from '../../../redux/actions/seedActions';
import { toast } from 'react-toastify';

const EditGraine = ({ history, handleSubmit, match }) => {
    const seedID = match.params.id;

    const dispatch = useDispatch();

    const { error, seedDetail } = useSelector((state) => state.detailSeed);
    const { error: errorUpdate, success } = useSelector(
        (state) => state.updateSeed
    );
    
    console.log("🚀 ~ file: EditGraine.jsx ~ line 22 ~ EditGraine ~ seedDetail", seedDetail)
    useEffect(() => {

        dispatch(seedDetailAction(seedID))

    }, []);

    const onHandleSubmit = () => {};

    return (
        <div className="AddGrainePage">
            {/* {error && toast.error(error)} */}
            <h1>Modifier graine : ......</h1>
            <div className="formulaire__form">
                <form onSubmit={handleSubmit(onHandleSubmit)} className="form">
                    <Field
                        name="legume"
                        component={renderInput}
                        label="Legume"
                        placeholder="ex : tomate !"
                        type="text"
                        valueInput={seedDetail.legume}
                        
                    />

                    <Field
                        name="cultivar"
                        type="text"
                        component={renderInput}
                        label="cultivar"
                        placeholder="ex : green-zebra !"
                        valueInput={seedDetail.cultivar}

                    />

                    <Field
                        name="startSemis"
                        type="date"
                        component={renderInput}
                        label="debut du semis"
                        placeholder="ex : dd/mm/yyyy !"
                        valueInput={seedDetail.startSemis}

                    />

                    <Field
                        name="endSemis"
                        type="date"
                        component={renderInput}
                        label="Fin du semis"
                        placeholder="ex : dd/mm/yyyy !"
                        valueInput={seedDetail.endSemis}

                    />

                    <Field
                        name="quantity"
                        type="number"
                        component={renderInput}
                        label="Quantités"
                        placeholder="ex : 1234"
                        valueInput={seedDetail.quantity}
                    />

                    <Field
                        name="comment"
                        type="text"
                        component={renderInput}
                        label="Commentaire"
                        valueInput={seedDetail.comment}
                        
                    />

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

export default reduxForm({ form: 'addGraine', validate })(EditGraine);
