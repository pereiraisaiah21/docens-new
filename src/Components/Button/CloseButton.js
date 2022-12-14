import Emoji from 'a11y-react-emoji';
import style from "./Button.module.scss";

function CloseButton () {

    return (
        
        <Emoji className={style.bCloseNav} symbol={"🔄"} label="love" />
    );
}

export default CloseButton;
