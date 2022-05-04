import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Navigator from "./pages/navigator";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home/index";
import Cart from "./pages/home/cart";
import Flash from "./pages/flash";
import Dashboard from "./pages/dashboard/dashboard";
import Mc from "./pages/McDonald/index";
import Abee from "./pages/mApplebee/index";
import Kfc from "./pages/mKfc/index";
import Subway from "./pages/mSubway/index";
import Auth from './utils/auth';
import McOrder from "./pages/McOrder";
import ApplebeeOrder from "./pages/mAppleOrder";
import KfcOrder from "./pages/mKfcOrder";
import SubwayOrder from "./pages/mSubwayOrder";



export default class App extends Component {
    render() {
        return (
            
            <Router>
                <Navigator />
                <Flash />
                <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} /> 
                <Route path="/dashboard" exact component={Auth(Dashboard)} />
                
                <Route path="/mc" exact component={Auth(Mc)} />
                <Route path="/abee" exact component={Auth(Abee)} />
                <Route path="/kfc" exact component={Auth(Kfc)} />
                <Route path="/subway" exact component={Auth(Subway)} />

                <Route path="/mcOrder" exact component={McOrder} />
                <Route path="/applebeeOrder" exact component={ApplebeeOrder} />
                <Route path="/kfcOrder" exact component={KfcOrder} />
                <Route path="/subwayOrder" exact component={SubwayOrder} />

                </Switch>
            </Router>

        );
    }
}