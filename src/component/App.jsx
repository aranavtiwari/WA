import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Quotes from './Quotes';
import P2001 from "./page/P2001";
import T241 from "./page/Page1";
import P2412 from "./page/P2412";
import P2301 from "./page/P2301";
import P23012 from "./page/P23012";
import P2501 from "./page/P2501";
import P25012 from "./page/P25012";
import P2601 from "./page/P2601";
import P26012 from "./page/P26012";
import P2701 from "./page/P2701";
import P2801 from "./page/P2801";
import P3001 from "./page/P3001";
import '../App.css';

function App() {


    const pages = [
        {path:"/",component:Home},
        {path:"/about",component:About},
        {path:"/qutoes",component:Quotes},
        {path:"/P2001",component:P2001},
        {path:"/T241",component:T241},
        {path:"/P2412",component:P2412},
        {path:"/P2301",component:P2301},
        {path:"/P23012",component:P23012},
        {path:"/P2501",component:P2501},
        {path:"/P25012",component:P25012},
        {path:"/P2601",component:P2601},
        {path:"/P26012",component:P26012},
        {path:"/P2701",component:P2701},
        {path:"/P2801",component:P2801},
        {path:"/P3001",component:P3001}


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
