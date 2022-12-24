import React from "react";
import style from "../../Content.module.scss";

function Recommendation() {

    return (
        
        <section className={style.crWrapper}>
            <h3 className={style.crTitle}>
                Recomendações
            </h3>
            <ul className={style.crList}>
                <li className={style.crItem}>
                    <a className={style.crAnchor} href="fsd" title="s">
                        Sequencial
                    </a>
                </li>
                <li className={style.crItem}>
                    <a className={style.crAnchor} href="fsd" title="s">
                        Sequencial
                    </a>
                </li>
                <li className={style.crItem}>
                    <a className={style.crAnchor} href="fsd" title="s">
                        Sequencial
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Recommendation;
