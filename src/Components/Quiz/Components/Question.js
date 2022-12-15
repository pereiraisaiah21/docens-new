import style from "../Quiz.module.scss";
import Alternatives from "./Alternatives";
import Emoji from 'a11y-react-emoji';

function Question () {

    return (

        <form className={style.qForm}>
            <header className={style.qHeader}>
                <h3 className={style.qTitle}>
                    Titulo Pergunta
                </h3>
                <p className={style.qDescription}>
                    Descrição pergunta vem aqui:
                </p>
            </header>
            <Alternatives alternatives={[1,2,3]} />
            <button type="submit" className={style.qSend}>
                Avançar  <Emoji className={style.qSendEmoji} symbol={"	➡	"} label="right-arrow" />
            </button>
        </form>
    );
}

export default Question;
