import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import P2001 from "./page/P2001";
import T241 from "./page/Page1";
import P2412 from "./page/P2412";
import P2301 from "./page/P2301";
import P23012 from "./page/P23012";
import P2501 from "./page/P2501";
import P25012 from "./page/P25012";
import '../App.css';

function App() {


    const pages = [
        {path:"/",component:Home},
        {path:"/about",component:About},
        {path:"/P2001",component:P2001},
        {path:"/T241",component:T241},
        {path:"/P2412",component:P2412},
        {path:"/P2301",component:P2301},
        {path:"/P23012",component:P23012},
        {path:"/P2501",component:P2501},
        {path:"/P25012",component:P25012},
    ]
    
    const pageLink = () => {
        return pages.map((data) =>{
            return(
                <Link path={data.path} exact component={data.component} />
            )
        })
    }

    return (
        <div>
            <Switch>
                {pageLink()}
            </Switch>
        </div>
)
}

export default App
