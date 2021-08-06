import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Router, Switch, Route, Link, Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import List from "./components/List"

import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

import {history} from "./helpers/history";

const App = () => {

    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);


    const logOut = () => {
        dispatch(logout());
    };

    return (
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/list"} className="nav-link">
                                    List
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/login"]} component={Login}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/list" render={() => (currentUser ? (<List/>) : (<Redirect to="/login"/>))}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;