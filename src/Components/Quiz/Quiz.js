import Question from "./Components/Question";
import style from "./Quiz.module.scss";

function Quiz () {

    return (
        
        <section className={style.qWrapper}>
            <div className={style.qContent}>
               <Question />
            </div>
        </section>
    );
}

export default Quiz;
