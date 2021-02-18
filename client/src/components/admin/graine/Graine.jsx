import React, { useEffect } from 'react';
import './graine.style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSeed } from '../../../redux/actions/seedActions';
import Spinner from '../../spinner/Spinner';


const Graine = ({ history }) => {
    const dispatch = useDispatch();

    const {
        allSeed: { data: seeds },
        loading,
        error,
    } = useSelector((state) => state.seeds);
    const { userInfo } = useSelector((state) => state.userLogin);

    console.log('🚀 ~ file: Graine.jsx ~ line 13 ~ Graine ~ allSeed', seeds);
    useEffect(() => {
        if (!userInfo) {
            history.push('/');
        }

        dispatch(fetchSeed());
    }, [userInfo, history, dispatch]);


    //__________________________________fonction_______________________________________

    const deleteSeed = () =>{
        
    }

    return (
        <div className="containerAdminSeed">
            <h1>Liste des graines</h1>
            <div>
                <i className="fas fa-plus-circle fa-5x addBtn"></i>
            </div>
            {error && <p>{error}</p>}
            {loading ? (
                < Spinner />
            ) : (
                <table class="responstable">
                    <thead>
                        <tr>
                            <th>Legume</th>
                            <th>cultivar</th>
                            <th>Début-semis</th>
                            <th>Fin-SEmis</th>
                            <th>Quantités</th>
                            <th>Commentaire</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {seeds &&
                            seeds.map((seed) => {
                                return (
                                    <tr index={seed._id}>
                                        <td>{seed.legume}</td>
                                        <td>{seed.cultivar}</td>
                                        <td>{seed.startSemis}</td>
                                        <td>{seed.endSemis}</td>
                                        <td>{seed.quantity}</td>
                                        <td>{seed.comment}</td>
                                        <td>
                                            <div className="btnContent">
                                                <i class="fas fa-edit fa-2x btnEdit" ></i>
                                                <i class="fas fa-trash fa-2x btnTrash" onClick={deleteSeed}></i>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Graine;
