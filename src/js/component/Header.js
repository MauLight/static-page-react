import React from "react"
import reactImage from "../../img/1.png";

const Header = () => {
    return (
        <header id="head">
            <nav id="wrap">
                <div id="logo-nav">
                    <img id="logo" src={reactImage}></img>
                    <h2 id="reactFacts">ReactFacts</h2>
                </div>
                <ul id="navbar">
                    <li>wanna</li>
                    <li>press</li>
                    <li>here?</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header