import React from "react";
import Emoji from 'a11y-react-emoji';
import sytle from "./Header.module.scss";

function Header () {
    
    return (

        <header className={sytle.hWrapper}>
            <div className={sytle.hBreadcrumb}>
                Dashboard / Home
            </div>
            <div className={sytle.hUserDropdown}>
                <span>
                    <Emoji className={sytle.hEmoji} symbol={"👤"} label="user" />
                </span> 
                Capitain Kirk
            </div>
        </header>
    );
}

export default Header;
