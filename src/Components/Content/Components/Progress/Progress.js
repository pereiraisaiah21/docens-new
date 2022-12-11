import style from "../../Content.module.scss";
import ProgressContents from "./ProgressContents";
import Tutorial from "./Tutorial";

function Progress () {
    
    const consumedMatter = [
        {
            name : "Sequencial",
            link : "sequential",
            progress : 20,
            emoji: "💥"
        },
        {
            name : "Repetição",
            link : "sequential",
            progress : 60,
            emoji: "💥"
        },
        {
            name : "Pseudo",
            link : "sequential",
            progress : 90,
            emoji: "💥"
        },
    ];

    return (

        <section className={style.cpWrapper}>
            <ProgressContents data={consumedMatter} />
            <Tutorial />
        </section>
    );
}

export default Progress;
