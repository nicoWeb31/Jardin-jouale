import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import Graine from '../../components/admin/graine/Graine';
import User from '../../components/admin/user/User';
import AddGraine from '../formuaire/graine/AddGraine';
import './Admin.style.scss';

const Admin = () => {


    const {path} = useRouteMatch();

    return (
        <div className="blockJardin">
            <h1>Administration Jardinier</h1>
            <div className="gridContainer">
                <div className="sidbar">

                    <Link to={`${path}/user`}  className="itemSideBar" >Gestion users</Link>
                    <Link to={`${path}/graine`}  className="itemSideBar" >Grainotheque</Link>
                    <Link to={`${path}/plantVente`}  className="itemSideBar" >Nos plant a la vente</Link>
                    <Link to={`${path}/legumeVente`} className="itemSideBar" >Nos surplus de legume</Link>

                    <Link to={`${path}/gestionSemis`}  className="itemSideBar" >Getions des semis</Link>



                </div>

                <div className="contentAdmin">
                    <Switch>


                        <Route path={`${path}/graine`} exact component={Graine} />
                        <Route path={`${path}/graine/add`} exact component={AddGraine} />

                        <Route path={`${path}/user`} exact component={User} />

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;
