import React, { useEffect } from "react";
import Header from "../Header/Header";
import ActionsList from "../Content/Components/ActionsList";
import GuideLine from "../Content/Components/Guideline";
import Progress from "./Components/Progress/Progress";
import Recommendation from "./Components/Recommendation/Recommendation";
import Subject from "./Components/Subject/Subject";
import Login from "../Login/Login";
import Registration from "../Login/Registration";

import style from "./Content.module.scss";
import Quiz from "../Quiz/Quiz";

function Content ({
    sectionOpen
}) {

    useEffect(() => {

        if (sectionOpen) {
            document.querySelector(`[data-open].open`).classList.remove("open");
            document.querySelectorAll(`[data-open="${sectionOpen}"]`)[0].classList.add("open");
        } else {
            document.querySelectorAll(`[data-open="das"]`)[0].classList.add("open");
        }
    }, [sectionOpen]);

    return (

        <section>
            <Header />
            <section className={style.cSection} data-open="das">
                <Quiz />
                <ActionsList />
                <GuideLine />
                <Progress />
                <Recommendation />
            </section>
            <section className={style.cSection} data-open="con">
                {/* // Another section */}
                <Subject />
            </section>
            <section className={style.cSection} data-open="">
                <Login />
            </section>
            <section className={style.cSection} data-open="">
                <Registration />
            </section>
        </section>
    );
}

export default Content;
