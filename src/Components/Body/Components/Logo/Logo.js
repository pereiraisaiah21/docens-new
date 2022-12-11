import style from "../../Body.module.scss";

function Logo () {

    return (

        <figure className={style.blLogo}>
            <img alt="" src="" className={style.blImage} />
            <figcaption className={style.blLabel}>
                Logo
            </figcaption>
        </figure>
    );
}

export default Logo;
