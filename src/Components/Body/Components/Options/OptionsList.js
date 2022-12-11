import style from "../../Body.module.scss";
import Option from "./Option";

function OptionsList () {

    const options = [
        {
            name : "Dashboard",
            title : "Dashboard",
            emoji: "🏠"
        },
        {
            name : "Conteúdos",
            title : "Dashboard",
            emoji: "🏠"
        },
        {
            name : "Desafios",
            title : "Dashboard",
            emoji: "🏠"
        },
    ];

    return (
        
        <ul className={style.boList}>
            <li className={style.boItemDescription}>
                Ferramentas
            </li>
            {
                options.map((item, key) => {
                    return (
                        <Option emoji={item.emoji} href="afsad" key={key} name={item.name} title={item.title} />
                    )   
                })
            }
        </ul>
    );
}

export default OptionsList;
