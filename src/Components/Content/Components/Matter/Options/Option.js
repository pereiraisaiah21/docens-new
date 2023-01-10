import React from "react";
import Emoji from 'a11y-react-emoji';
import PropTypes from "prop-types";
import style from "../../../Content.module.scss";

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

        <li className={style.cmItem}>
            <a className={style.cmAnchor} href={`${href}`} title={title} onClick={handleOptionClick}>
                <span className={style.cmName}>
                    {name}
                </span>
                <Emoji className={style.cmEmoji} symbol={emoji} label={title} />
            </a>
        </li>
    );
}

Option.defaultProps = {
    href : null,
    title : null,
    name : null,
    emoji : null,
    setState : null,
}
Option.propTypes = {
    href : PropTypes.string,
    title : PropTypes.string,
    name : PropTypes.string,
    emoji : PropTypes.string,
    setState : PropTypes.func,
}

export default Option;
