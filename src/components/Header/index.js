import React from "react";
import BrainFlixLogo from "../../assets/images/BrainFlix-logo.svg"
import Avatar from "../../assets/images/Mohan-muruge.jpg"
import UploadButton from "../../assets/images/upload.svg"
import Magnifier from "../../assets/images/search.svg"
import "./index.scss"

const magnifierFunction = () => {
    return <img src={Magnifier}/>
}

const Header = () => {
    return (
        <header className="header">
            <img src={BrainFlixLogo} className="header__logo"/>
            <div className="header__search">
                <input type="search" className="header__search--input" placeholder={`${magnifierFunction()} Search`}></input>
                <img src={Avatar} className="header__search--avatar"/>
            </div>    
            <button className="header__button"><img className="header__button--arrow" src={UploadButton}/>Upload<div className="header__button--blank-div"></div></button>
        </header>
    )
}

export default Header