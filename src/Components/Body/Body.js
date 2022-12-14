import React, { useState } from "react";
import style from "./Body.module.scss";
import Content from "../Content/Content";
import Navigation from "./Components/Navigation/Navigation";

function Body () {

    const [ sectionOpen, setSectionOpen ] = useState( "" );

    return (

        <main className={style.bMain}>
            <Navigation setState={setSectionOpen} />
            <div className={style.bContent}>
                <Content sectionOpen={sectionOpen} />
            </div>
        </main>
    );
}

export default Body;
