import React, { useState } from "react";
import Question from "./Components/Question";
import style from "./Quiz.module.scss";

function Quiz () {

    const [ getNewQuestion, setGetNewQuestion ] = useState( false );

    const questionData = {
        name: "Pergunta fatídica",
        description: "Quantos anos tem o mundo?",
        alternatives: ["5", "10", "20"]
    };

    return (
        
        <section className={style.qWrapper}>
            <div className={style.qContent}>
               <Question data={questionData} getNewQuestion={getNewQuestion} setGetNewQuestion={setGetNewQuestion} />
            </div>
        </section>
    );
}

export default Quiz;
