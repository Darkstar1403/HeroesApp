import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
    <Router basename="/..">
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen}/>
{`Las rutas que sean secundarias como con el switch de este Dash es necesario que no sea exacto para que funcione correctamente`}
                    <Route path='/' component={DashboardRoutes}/>
                </Switch>
            </div>
    </Router>
    )
}
