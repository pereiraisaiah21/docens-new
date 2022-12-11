
import style from "../Content.module.scss";
import Emoji from 'a11y-react-emoji';

function ActionsList () {

    return (
        
        <section className={style.cWrapper}>
            <div className={style.cContent}>
                <h2 className={style.cTitle}>
                    Titulo
                </h2>
                <ul className={style.coList}>
                    <li className={style.coItem}>
                        <a className={style.coAnchor} href="/asa" title="">
                            <Emoji className={style.coEmoji} symbol="🤖" label="alien monster" />
                            <span className={style.coName}>
                                Ação 1
                            </span>
                        </a>
                    </li>
                    <li className={style.coItem}>
                        <a className={style.coAnchor} href="/asa" title="">
                            <Emoji className={style.coEmoji} symbol="🤖" label="alien monster" />
                            <span className={style.coName}>
                                Ação 1
                            </span>
                        </a>
                    </li>
                    <li className={style.coItem}>
                        <a className={style.coAnchor} href="/asa" title="">
                            <Emoji className={style.coEmoji} symbol="🤖" label="alien monster" />
                            <span className={style.coName}>
                                Ação 1
                            </span>
                        </a>
                    </li>
                    <li className={style.coItem}>
                        <a className={style.coAnchor} href="/asa" title="">
                            <Emoji className={style.coEmoji} symbol="🤖" label="alien monster" />
                            <span className={style.coName}>
                                Ação 1
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ActionsList;
