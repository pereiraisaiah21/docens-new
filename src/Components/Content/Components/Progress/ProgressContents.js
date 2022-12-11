import Emoji from 'a11y-react-emoji';
import style from "../../Content.module.scss";

function ProgressContents ({
    data
}) {
    
    return (

        <aside className={style.cpAside}>
            <ul className={style.cpList}>
                <li className={style.cpItemDescription}>
                    Tópicos
                </li>
                {
                    data
                    ?
                    data.map( ( matter, index ) => {
                        return (
                            <li className={style.cpItem} key={index}>
                                <a className={style.cpAnchor} href="/fasd" title="f">
                                    <Emoji className={style.cpEmoji} symbol={matter.emoji} label={matter.name} />
                                    {matter.name}
                                </a>
                            </li>
                        )
                    })
                    :
                    null
                }
            </ul>
        </aside>
    );
}

export default ProgressContents;
