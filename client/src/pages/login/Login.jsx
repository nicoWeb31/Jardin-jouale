import React,{useEffect} from 'react';
import ButtonP from '../../components/button/ButtonP';
import './login.style.scss';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../redux/actions/authActions';
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

                type={formProps.type}
            />
            <label className="form__label">{formProps.label}</label>
            {renderError(formProps.meta)}
        </div>
    );
};

const Login = ({history,handleSubmit}) => {


    const dispatch = useDispatch();
    const {loginForm:{values: valuesForm}} = useSelector(state => state.form)
    const {loading,error,userInfo} = useSelector(state => state.userLogin)



    useEffect(()=>{

        if(userInfo){
            history.push('/')
        }

    },[history,userInfo]);

    
    //____________________________function____________________________________________________
    
    const onHandleSubmit = () => {
        dispatch(login(valuesForm));
    };


    return (
        <div className="loginPage">
            <div>
            {/* error from server TODO:*/}
            {error && <h3>{error}</h3>}
            </div>

            <div>
                {loading && <h3>loading......</h3>}
            </div>


            <div class="loginBlock">
                <h1>Connexion </h1>
                <div className="formulaire__form">
                    <form onSubmit={handleSubmit(onHandleSubmit)} className="form">
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
                        <ButtonP>
                            <button type="submit" className="loginBtn" disabled={valuesForm && !valuesForm.email && !valuesForm.password} >
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
        errors.email = "votre adresse email a un problème !";
    }
    if (!formValues.email) {
        //only ran if user did not enter a name
        errors.email = "vous devez entrer votre mail !";
    }

    if(!formValues.password) {
        errors.password = "vous devez entrer votre mail !";
    }


    return errors;
};

export default reduxForm({ form: 'loginForm',validate })(Login);
