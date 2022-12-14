import Emoji from 'a11y-react-emoji';
import style from "../../Body.module.scss";

function Option ({
    href,
    title,
    name,
    emoji,
    setState
}) {

    const handleOptionClick = function (event) {
        event.preventDefault();
        setState(event.target.closest("a").getAttribute("href"));
    };

    return (

        <li className={style.boItem}>
            <a className={style.boAnchor} href={`${href}`} title={title} onClick={handleOptionClick}>
                <Emoji className={style.boEmoji} symbol={emoji} label={title} />
                <span className={style.boName}>
                    {name}
                </span>
            </a>
        </li>
    );
}

export default Option;
