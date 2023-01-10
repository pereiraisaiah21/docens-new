import React, { useState } from "react";
import Emoji from 'a11y-react-emoji';
import style from "./Header.module.scss";

function Header () {

    const [ subMenuOpen, setSubMenuOpen ] = useState( false );

    const handleUserOptions = function () {
        setSubMenuOpen( !subMenuOpen );
    };
    
    return (

        <header className={style.hWrapper}>
            <div className={style.hBreadcrumb}>
                Dashboard / Home
            </div>
            <div className={style.hUserDropdown}>
                <button className={style.hUserAnchor} type="button" onClick={handleUserOptions}>
                    <span>
                        <Emoji className={style.hEmoji} symbol={"👤"} label="user" />
                    </span> 
                    Capitain Kirk
                    <span>
                        <Emoji className={style.hEmoji} symbol={"➕"} label="user" />
                    </span>
                </button>
                <ul className={style.hUserDropdownOpen} style={{display : subMenuOpen ? "block" : "none"}}>
                    <li className={style.hUserDropdownSubitem}>
                        Meus dados
                    </li>
                    <li className={style.hUserDropdownSubitem}>
                        Minhas conquistas
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
