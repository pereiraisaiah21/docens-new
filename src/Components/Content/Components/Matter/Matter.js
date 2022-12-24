import React from "react";
import style from "../../Content.module.scss";
import Option from "./Options/Option";

function Matter () {


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
    ];


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
                        <Option emoji={item.emoji} href={item.trigger}  name={item.name} title={item.title} />
                    )   
                })
            }
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                    <li className={style.cmItem}>
                        <a className={style.cmAnchor} href="fsd" title="s">
                            Sequencial
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Matter;
