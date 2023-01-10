import React, { useState } from "react";
import style from "./Body.module.scss";
import Content from "../Content/Content";
import Navigation from "./Components/Navigation/Navigation";

function Body () {

    const [ sectionOpen, setSectionOpen ] = useState( "" );
    const [ reducedMenu, setReducedMenu ] = useState( false );

    return (

        <main className={style.bMain} style={{gridTemplate : reducedMenu ? "'navigation content'/.2fr 4fr" : "'navigation content' /1fr 4fr"}}>
            <Navigation setState={setSectionOpen} isReducedMenu={reducedMenu} setMenuReduced={setReducedMenu} />
            <div className={style.bContent}>
                <Content sectionOpen={sectionOpen} />
            </div>
        </main>
    );
}

export default Body;
