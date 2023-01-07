import React from "react";
import style from "../Quiz.module.scss";

function Initial () {

    return (
        
        <section className={style.qInitial}>
            Bem-vindo ao questionário de avaliação de conhecimento.
            Responda as perguntas de acordo com o exercício proposto. 
        </section>
    );
}

export default Initial;
