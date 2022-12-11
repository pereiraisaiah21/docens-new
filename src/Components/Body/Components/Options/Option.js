import Emoji from 'a11y-react-emoji';
import style from "../../Body.module.scss";

function Option ({
    href,
    title,
    name,
    emoji
}) {

    return (

        <li className={style.boItem}>
            <a className={style.boAnchor} href={`/${href}`} title={title}>
                <Emoji className={style.boEmoji} symbol={emoji} label={title} />
                <span className={style.boName}>
                    {name}
                </span>
            </a>
        </li>
    );
}

export default Option;
