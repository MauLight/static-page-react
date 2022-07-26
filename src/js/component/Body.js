import React from "react";
import otherLogo from "../../img/reactjs-icon 2.png";

const Body = () => {
    return (
        <div id="body-wrap">
            <h1 id="title">Hey, I'm doing my best!</h1>
            <div id="second-wrap">
                <ul id="list">
                    <li>But this sleeping thing is driving me nuts.</li>
                    <li>Also I think I'm in a negative state today.</li>
                    <li>Now I'm thinking this is not mine.</li>
                    <li>They always do, btw...</li>
                </ul>
                <img src={otherLogo} id="half-logo"></img>
            </div>

        </div>
    )
}

export default Body