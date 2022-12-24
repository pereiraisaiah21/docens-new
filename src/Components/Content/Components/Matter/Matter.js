import React, { useState } from "react";
import style from "../../Content.module.scss";
import Option from "./Options/Option";
import Subject from "./Subject/Subject";

function Matter () {

    const [ setState, setSetState ] = useState( null );

    const options = [
        {
            name: "Dashboard",
            title: "Dashboard",
            emoji: "🏠",
            trigger: "das"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
        },
        {
            name: "Trigger",
            title: "Challenge",
            emoji: "🏠",
            trigger: "cha"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
        },
        {
            name: "Trigger",
            title: "Challenge",
            emoji: "🏠",
            trigger: "cha"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
        },
        {
            name: "Trigger",
            title: "Challenge",
            emoji: "🏠",
            trigger: "cha"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
        },
        {
            name: "Trigger",
            title: "Challenge",
            emoji: "🏠",
            trigger: "cha"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
        },
        {
            name: "Trigger",
            title: "Challenge",
            emoji: "🏠",
            trigger: "cha"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
        }
    ];

    console.log( setState , " sfdsafuhs")

    return (

        <section className={style.cmWrapper}>
            <div className={style.cmContent}>
                <h3 className={style.cmTitle}>
                    Tópicos
                </h3>
                <ul className={style.cmList}>
                {
                    options.map((item) => {
                        return (
                            <Option emoji={item.emoji} href={item.trigger} setState={setSetState} name={item.name} title={item.title} />
                        )   
                    })
                }
                </ul>
            </div>
            <div className={style.cmContent}>
                {
                    options
                    ?
                    <Subject subjectName={setState} />
                    :
                    null
                }
            </div>
        </section>
    );
}

export default Matter;
