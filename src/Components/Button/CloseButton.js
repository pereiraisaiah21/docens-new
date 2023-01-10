import Emoji from 'a11y-react-emoji';
import style from "./Button.module.scss";

function CloseButton ({
    isMenuReduced,
    setState
}) {

    return (
        
        <Emoji className={style.bCloseNav} symbol={"🔄"} label="love" onClick={(e) => setState( !isMenuReduced ) }/>
    );
}

export default CloseButton;
