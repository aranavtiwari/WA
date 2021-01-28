import React from 'react'
import {Link} from "react-router-dom";


function About() {
    return (
        <div className="about-section">
            <h1 className="heading">About</h1>
            <span className="qborder"></span>
            <p className="intro">I am a computer science undergraduate student. I am fond of reading a newspaper and another article on Indian foreign policy. </p>
            <h2>FAQ.</h2>
            <h3>Why WA.</h3>
            <p className="waintro">I am always curious about the things going on with India foreign policy and world. <br/><br/>
            Nowadays, News media try to cover sensational topic mostly, and they do not give much importance to these topics. And most news outlets compromise styling , by which their website does not feel comfortable for reading—that why I created WA.<br/><br/>
            WA is a platform where you can find an article related to India foreign policy with comfortable typography.</p>
            <div className="back">
                <Link to="/">&#8592; Back</Link>
            </div>
            
        </div>
    )
}

export default About
