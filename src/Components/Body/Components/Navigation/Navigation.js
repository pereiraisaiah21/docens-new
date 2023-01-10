import React from "react";
import Logo from "../Logo/Logo";
import OptionsList from "../Options/OptionsList";
import Tools from "../Tools/Tools";
import style from "../../Body.module.scss";
import CloseButton from "../../../Button/CloseButton";

function Navigation ({
    isReducedMenu,
    setMenuReduced,
    setState
}) {
 
    return (

        <nav className={style.bNavigation}>
            <CloseButton setState={setMenuReduced} isMenuReduced={isReducedMenu} />
            <Logo isMenuReduced={isReducedMenu} />
            <OptionsList setState={setState} isMenuReduced={isReducedMenu}  />
            <Tools setState={setState} isMenuReduced={isReducedMenu} />
        </nav>
    );
}

export default Navigation;
