import style from "../../Body.module.scss";
import Option from "../Options/Option";

function Tools ({
    isMenuReduced,
    setState
}) {

    return (

        <ul className={style.btList}>
            <li className={style.btSpacer}></li>
            <Option emoji="⚙" href="afsad" name={!isMenuReduced ? "Configurações" : null} title="" setState={setState}/>
        </ul>
    );
}

export default Tools;
