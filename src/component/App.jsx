import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import T241 from "./page/Page1";
import P2412 from "./page/P2412";
import P2301 from "./page/P2301";
import P23012 from "./page/P23012";
import P2501 from "./page/P2501";
import P25012 from "./page/P25012";
import '../App.css';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/T241" exact component={T241} />
                <Route path="/P2412" exact component={P2412} />
                <Route path="/P2301" exact component={P2301} />
                <Route path="/P23012" exact component={P23012} />
                <Route path="/P2501" exact component={P2501} />
                <Route path="/P25012" exact component={P25012} />
            </Switch>
        </div>
)
}

export default App
