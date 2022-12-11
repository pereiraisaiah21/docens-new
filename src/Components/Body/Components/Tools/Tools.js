import style from "../../Body.module.scss";
import Option from "../Options/Option";

function Tools () {

    return (

        <ul className={style.btList}>
            <li className={style.btSpacer}></li>
            <Option emoji="⚙" href="afsad" name="Configurações" title="" />
        </ul>
    );
}

export default Tools;
