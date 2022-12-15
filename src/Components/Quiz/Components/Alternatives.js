import React, { useState } from "react";
import style from "../Quiz.module.scss";

function Alternatives ({
    alternatives
}) {

    const [selected, setSelected] = useState( null );

    return (
        
        <ul className={style.qAlternatives}>
            {
                alternatives
                ?
                alternatives.map((item,key) => {
                    return (

                        // <li className={`Question__alternatives__option ${selected === item ? "selected" : ""}`} key={key}>
                        <li className={style.qAlternativesItem} key={key}>
                            <label className={style.qAlternativesLabel} htmlFor={`a${key}`}>
                                <input
                                    type="radio"
                                    id={`a${key}`}
                                    name="choose"
                                    value={`${item}`}
                                    checked={`${item}`=== selected ? "selected" : ""}
                                    onChange={(e) => setSelected(e.target.value)}
                                    className={`${selected ? "selected" : ""}`}
                                />
                                {item}
                            </label>
                        </li>)
                    })
                :
                ""
            }
        </ul>
    );
}

export default Alternatives;
