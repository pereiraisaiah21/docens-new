import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import ActionsList from "./Components/ActionsList";
import GuideLine from "./Components/Guideline";
import Progress from "./Components/Progress/Progress";
import Recommendation from "./Components/Recommendation/Recommendation";
import Login from "../Login/Login";
import Registration from "../Login/Registration";

import style from "./Content.module.scss";
import Quiz from "../Quiz/Quiz";
import Matter from "./Components/Matter/Matter";
import Profile from "../Profile/Profile";

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
                <ActionsList />
                <GuideLine />
                <Progress />
                <Recommendation />
            </section>
            <section className={style.cSection} data-open="con">
                {/* // Another section */}
                <Matter />
            </section>
            <section className={style.cSection} data-open="">
                <Login />
            </section>
            <section className={style.cSection} data-open="">
                <Registration />
            </section>
            <section className={style.cSection} data-open="qui">
                <Quiz />
            </section>
            <section className={style.cSection} data-open="pro">
                <Profile />
            </section>
        </section>
    );
}

Content.defaultProps = {
    sectionOpen: null,
}
Content.propTypes = {
    sectionOpen : PropTypes.func,
}

export default Content;
