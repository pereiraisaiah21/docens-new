import React from "react";
import sytle from "./Header.module.scss";

function Header () {
    
    return (

        <header className={sytle.hWrapper}>
            <div className={sytle.hBreadcrumb}>
                Dashboard / Home
            </div>
            <div className={sytle.hUserDropdown}>
                Name 
            </div>
        </header>
    );
}

export default Header;
