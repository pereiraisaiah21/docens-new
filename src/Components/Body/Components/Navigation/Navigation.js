import React from "react";
import Logo from "../Logo/Logo";
import OptionsList from "../Options/OptionsList";
import Tools from "../Tools/Tools";
import style from "../../Body.module.scss";

function Navigation () {

    return (

        <nav className={style.bNavigation}>
            <Logo />
            <OptionsList />
            <Tools />
        </nav>
    )
}

export default Navigation;
