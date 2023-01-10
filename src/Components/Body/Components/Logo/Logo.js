import style from "../../Body.module.scss";

function Logo ({
    isMenuReduced
}) {

    return (

        <figure className={style.blLogo}>
            <img alt="" src={!isMenuReduced ? "/logo.png" : "/LogoReduced.png"} className={style.blImage} />
            <figcaption className={style.blLabel} />
        </figure>
    );
}

export default Logo;
