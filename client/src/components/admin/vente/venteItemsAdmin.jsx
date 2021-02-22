import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchVenteItems
} from '../../../redux/actions/venteItemsActions';
import Spinner from '../../spinner/Spinner';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const VenteItemsAdmin = ({ history }) => {
    const dispatch = useDispatch();

    const {
        items: { data: items },
        loading,
        error,
    } = useSelector((state) => state.itemsVente);
    const { userInfo } = useSelector((state) => state.userLogin);

    useEffect(() => {
        if (!userInfo) {
            return history.push('/');
        }
        dispatch(fetchVenteItems());
    }, [userInfo, history, dispatch]);

    //__________________________________fonction_______________________________________

    const deleteSeed = (id) => {
        if (window.confirm('Are you sure you want to delete this seed?')) {
            // dispatch(deleteSeedAction(id));
            //TODO: 
            //NOTE: action delte User
            toast.success('Suprimer avec success!!');
            dispatch(fetchVenteItems());
        }
    };

    return (
        <div className="containerAdminSeed">
            <h1>Produit en vente</h1>
            <div>
                <Link to="/admin/itemsVente/add">
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
                            <th>Cultivar</th>
                            <th>Category</th>
                            <th>Quantités</th>
                            <th>Description</th>
                            <th>Photo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items &&
                            items.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.legume}</td>
                                        <td>{item.cultivar}</td>
                                        <td>{item.category}</td>
                                        <td>{item.quantity}</td>

                                        <td>{item.description}</td>
                                        <td>{item.photo}</td>
                                        <td>
                                            <div className="btnContent">
                                                <Link
                                                    to={`/admin/graine/edit/${item._id}`}
                                                >
                                                    <i class="fas fa-edit fa-2x btnEdit"></i>
                                                </Link>
                                                <i
                                                    class="fas fa-trash fa-2x btnTrash"
                                                    onClick={() =>
                                                        deleteSeed(item._id)
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

export default VenteItemsAdmin;
