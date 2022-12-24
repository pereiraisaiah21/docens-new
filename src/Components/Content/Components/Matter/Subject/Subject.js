import React from "react";
import Emoji from 'a11y-react-emoji';
import style from "../../../Content.module.scss";

function Subject () {

    return (

        <section className={style.csWrapper}>
            <div className={style.csContent}>
                <h1 className={style.csTitle}>
                    Titulo artigo
                </h1>
                <div className={style.csAuthor}>  
                    <Emoji className={style.csEmoji} symbol="👤" label="alien monster" />
                    Docens
                </div>
                <p className={style.csDescription}>
                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum
                </p>
            </div>
        </section>
    );
}

export default Subject;
