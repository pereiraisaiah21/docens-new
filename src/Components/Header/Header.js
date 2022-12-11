import React from "react";
import sytle from "./Header.module.scss";

function Header () {
    
    return (

        <header className={sytle.hWrapper}>
            <div>
                Dashboard / Home
            </div>
            <div>
                Name 
            </div>
        </header>
    );
}

export default Header;
