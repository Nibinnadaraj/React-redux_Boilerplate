import React from 'react'
import PrivateRoute from './PrivateRoute';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../lib/history';
import LoginContainer from '../components/login';
import HomeContainer from '../components/home';
import ProfileContainer from '../components/profile';
import Notfound from '../components/notFound';
export default function AppRouter({...props}) {
    return (
        <Router history={history}>
            
            <Switch>

                <Route exact path="/login" component={LoginContainer} />
                <PrivateRoute exact path="/" component={HomeContainer} />
                <PrivateRoute exact path="/profile" component={ProfileContainer} />

                <Route component={Notfound} />
            </Switch>

        </Router>
    )
}
