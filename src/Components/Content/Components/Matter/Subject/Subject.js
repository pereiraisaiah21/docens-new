import React from "react";
import PropTypes from "prop-types";
import Emoji from 'a11y-react-emoji';
import style from "../../../Content.module.scss";

function Subject ({
    subjectName
}) {

    return (

        <section className={style.csWrapper}>
            <div className={style.csContent}>
                <h1 className={style.csTitle}>
                    Titulo artigo { subjectName}
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

Subject.defaultProps = {
    subjectName: "",
}
Subject.propTypes = {
    subjectName : PropTypes.string,
}

export default Subject;
