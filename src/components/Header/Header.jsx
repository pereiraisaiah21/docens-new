import React from "react";

import style from "./Header.module.scss";

function Header () {

    return (

    <header className={style.Header}>
        <div className={style.HeaderWrapper}>
            <div className={style.HeaderUser}>
                A
            </div>
            <div className={style.HeaderOptions}>
                B
            </div>
        </div>
    </header>
    );
} 

export default Header;
