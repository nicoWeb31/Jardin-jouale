import React,{ useEffect } from 'react';
import '../addGraine.style.scss';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ButtonP from '../../../components/button/ButtonP';
import { renderInput } from '../../../components/renderInput/RenderInput';
import { useDispatch, useSelector } from 'react-redux';
import { addSeed } from '../../../redux/actions/seedActions';
import { toast } from 'react-toastify';

const AddGraine = ({ history, handleSubmit }) => {
    const dispatch = useDispatch();

    const { addGraine } = useSelector((state) => state.form);
    const {error, success} = useSelector((state) => state.addSeed);


    useEffect(()=>{

        if(success){
            toast.success(
                `${addGraine.values.legume} a été ajouter avec succsé`
            );
            history.push('/admin/graine');
        }

        if(error){
            toast.error(error.message);

        }

        
    },[dispatch,history,success,error, addGraine]);

    const onHandleSubmit = () => {

            dispatch(addSeed(addGraine.values));

    };

    return (
        <div className="AddGrainePage">

            {/* {error && toast.error(error)} */}
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
                        <ButtonP>
                            <Link to="/admin/graine">
                                <button className='loginBtn'>
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

export default reduxForm({ form: 'addGraine', validate })(AddGraine);