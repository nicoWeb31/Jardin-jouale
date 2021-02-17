import React from 'react';
import './graine.style.scss';

const Graine = () => {
    const listeSeeds = [];

    return (
        <div className="containerAdminSeed">
            <h1>Liste des graines</h1>
            <div>
                <i className="fas fa-plus-circle fa-5x addBtn"></i>
            </div>
            <table class="responstable">
                <tr>
                    <th>Legume</th>
                    <th>cultivar</th>
                    <th>Début-semis</th>
                    <th>Fin-SEmis</th>
                    <th>Quantités</th>
                    <th>Commentaire</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Tomate</td>
                    <td>Green-zebra</td>
                    <td>12-03</td>
                    <td>14-05</td>
                    <td>300</td>
                    <td>Super génial</td>
                    <td>
                        <div className="btnContent">
                            <i class="fas fa-edit fa-2x btnEdit"></i>
                            <i class="fas fa-trash fa-2x btnTrash"></i>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>Tomate</td>
                    <td>Green-zebra</td>
                    <td>12-03</td>
                    <td>14-05</td>
                    <td>300</td>
                    <td>Super génial</td>
                    <td>
                        <div className="btnContent">
                            <i class="fas fa-edit fa-2x btnEdit"></i>
                            <i class="fas fa-trash fa-2x btnTrash"></i>
                        </div>
                    </td>
                </tr>
                {/* {listeSeeds.map((seed)=>{
                    return (
                <tr>
                    <td>Tomate</td>
                    <td>Green-zebra</td>
                    <td>12-03</td>
                    <td>14-05</td>
                    <td>300</td>
                    <td>Super génial</td>

                </tr>

                        )
                })} */}
            </table>
        </div>
    );
};

export default Graine;
