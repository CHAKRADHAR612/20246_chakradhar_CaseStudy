import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import GetUsers from "./components/GetUsers";
const routing=(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/users">UsersList</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/login' component={LoginComponent}/>
                <Route path='/users' component={GetUsers}/>
            </Switch>
        </div>
    </Router>
)
export default routing;