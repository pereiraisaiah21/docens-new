import style from "../../Body.module.scss";

function Logo () {

    return (

        <figure className={style.blLogo}>
            <img alt="" src="/logo.png" className={style.blImage} />
            <figcaption className={style.blLabel} />
        </figure>
    );
}

export default Logo;
