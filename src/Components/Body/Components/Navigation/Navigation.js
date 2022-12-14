import React from "react";
import Logo from "../Logo/Logo";
import OptionsList from "../Options/OptionsList";
import Tools from "../Tools/Tools";
import style from "../../Body.module.scss";
import CloseButton from "../../../Button/CloseButton";

function Navigation ({
    setState
}) {
 
    return (

        <nav className={style.bNavigation}>
            <CloseButton />
            <Logo />
            <OptionsList setState={setState} />
            <Tools setState={setState} />
        </nav>
    )
}

export default Navigation;
