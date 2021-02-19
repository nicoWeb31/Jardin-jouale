import React, { useEffect, useState } from 'react';
import './graine.style.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchSeed,
    deleteSeed as deleteSeedAction,
} from '../../../redux/actions/seedActions';
import Spinner from '../../spinner/Spinner';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Graine = ({ history }) => {
    const dispatch = useDispatch();

    const {
        allSeed: { data: seeds },
        loading,
        error,
    } = useSelector((state) => state.seeds);
    const { userInfo } = useSelector((state) => state.userLogin);

    useEffect(() => {
        if (!userInfo) {
            return history.push('/');
        }
        dispatch(fetchSeed());
    }, [userInfo, history, dispatch]);

    //__________________________________fonction_______________________________________

    const deleteSeed = (id) => {
        try {
            dispatch(deleteSeedAction(id));
            toast.success('Suprimer avec success!!');
            dispatch(fetchSeed());
        } catch (error) {}
    };

    return (
        <div className="containerAdminSeed">
            <h1>Liste des graines</h1>
            <div>
                <Link to="/admin/graine/add">
                    <i className="fas fa-plus-circle fa-5x addBtn"></i>
                </Link>
            </div>
            {error && <p>{error}</p>}
            {loading ? (
                <Spinner />
            ) : (
                <table class="responstable">
                    <thead>
                        <tr>
                            <th>Legume</th>
                            <th>cultivar</th>
                            <th>Début-semis</th>
                            <th>Fin-Semis</th>
                            <th>Quantités</th>
                            <th>Commentaire</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {seeds &&
                            seeds.map((seed) => {
                                return (
                                    <tr key={seed._id}>
                                        <td>{seed.legume}</td>
                                        <td>{seed.cultivar}</td>
                                        <td>
                                            {new Date(
                                                seed.startSemis
                                            ).getUTCDate() +
                                                '/' +
                                                (new Date(
                                                    seed.startSemis
                                                ).getUTCMonth() +
                                                    1)}
                                        </td>
                                        <td>
                                            {new Date(
                                                seed.endSemis
                                            ).getUTCDate() +
                                                '/' +
                                                (new Date(
                                                    seed.endSemis
                                                ).getUTCMonth() *
                                                    1 +
                                                    1)}
                                        </td>

                                        <td>{seed.quantity}</td>
                                        <td>{seed.comment}</td>
                                        <td>
                                            <div className="btnContent">
                                                <Link to={`/admin/graine/edit/${seed._id}`}>
                                                    <i class="fas fa-edit fa-2x btnEdit"></i>
                                                </Link>
                                                <i
                                                    class="fas fa-trash fa-2x btnTrash"
                                                    onClick={() =>
                                                        deleteSeed(seed._id)
                                                    }
                                                ></i>
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
