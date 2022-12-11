import style from "../../Body.module.scss";

function Option ({
    href,
    title,
    name
}) {

    return (

        <li className={style.boItem}>
            <a className={style.boAnchor} href={`/${href}`} title={title}>
                {name}
            </a>
        </li>
    );
}

export default Option;
