import React from 'react';
import {Link} from "react-router-dom";

function Quotes() {

    /*===

    {
        text:"",
        author:""
    },

    ===*/

    const quotesData = [
        {
            text:"I don't mind your thinking slowly; I mind your speaking faster than you think.",
            author:"Wolfgang Pauli"
        },
        {
            text:"Anything that can happen will happen",
            author:"Interstellar."
        },
        {
            text:"If you can do anything good then don't do it for free ",
            author:" Joker."
        },
        {
            text:"Sometimes it's the very people who no one imagines anything of who do the things no one can imagine.",
            author:"Imitation Game"
        },
        {
            text:"Love cannot be found where it doesn’t exist, nor can it be hidden where it truly does.",
            author:"David Schwimmer, from Kissing a Fool"
        },
        {
            text:"Oh yes, the past can hurt. But you can either run from it, or learn from it.",
            author:"Rafiki, from The Lion King"
        },
        {
            text:"Why are you trying so hard to fit in when you were born to stand out?",
            author:"rom What a Girl Wants"
        },
        {
            text:"Don’t let anyone ever make you feel like you don’t deserve what you want. ",
            author:"Heath Ledger, from 10 Things I Hate About You"
        },
        {
            text:"Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period.",
            author:" Chris Gardner, from The Pursuit of Happyness"
        },
        {
            text:"You cannot be certain about uncertainty",
            author:"Frank Knight"
        },
        {
            text:"An expert is a man who has made all the mistakes which can be made in a very narrow field",
            author:"Bohr"
        },
        {
            text:"Politicians use statistics in the same way that a drunk uses lamp-posts; for support rather than illumination. ",
            author:"Andrew Lang"
        },
        {
            text:"By the time a man realizes that maybe his father was right, he usually has a son who thinks he’s wrong. ",
            author:"Charles Wadsworth"
        },
    ];


    const showQuotes = () => {
        return quotesData.map((data) => {
            return (
                <div>
                    <p className="text">{data.text}<br/>
                    <span>- {data.author}</span></p>
                </div>
            )
        })
    }


    return (
        <div className="quotes">
            <h1 className="heading">Quotes</h1>
            <span className="qborder"></span>
            <p className="date">2020-01-26</p>
            <div className="textbox">
                {showQuotes()}
            </div>
            <div className="back">
                <Link to="/">&#8592; Back</Link>
            </div>
            
        </div>
    )
}

export default Quotes
