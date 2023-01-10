import React from "react";
import Emoji from 'a11y-react-emoji';
import style from "../Quiz.module.scss";
import Alternatives from "./Alternatives";

function Question ({
    data,
    getNewQuestion,
    setGetNewQuestion
}) {

    return (

        <form className={style.qForm}>
            <header className={style.qHeader}>
                <h3 className={style.qTitle}>
                    {data.name}
                </h3>
                <p className={style.qDescription}>
                    {data.description}
                </p>
            </header>
            <Alternatives alternatives={data.alternatives} />
            <button type="submit" className={style.qSend} onClick={setGetNewQuestion( !getNewQuestion )}>
                Avançar  <Emoji className={style.qSendEmoji} symbol="➡" label="right-arrow" />
            </button>
        </form>
    );
}

export default Question;
