import React from "react";
import Index from "pages/index";
import Registration from "pages/registration";
import Channels from "pages/channels";
import Channel from "pages/channel";
import Listener from "pages/listener";
import Podcaster from "pages/podcaster";
import Create from "pages/create";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/registration' component={Registration}/>
			<Route exact path='/channels' component={Channels}/>
			<Route exact path='/channel' component={Channel}/>
			<Route exact path='/listener' component={Listener}/>
			<Route exact path='/podcaster' component={Podcaster}/>
			<Route exact path='/create' component={Create}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
