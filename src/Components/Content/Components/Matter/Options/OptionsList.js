import style from "../../Body.module.scss";
import Option from "./Option";

function OptionsList ({
    setState
}) {

    const options = [
        {
            name: "Dashboard",
            title: "Dashboard",
            emoji: "🏠",
            trigger: "das"
        },
        {
            name: "Conteúdos",
            title: "Content",
            emoji: "📚",
            trigger: "con"
        },
        {
            name: "Desafios",
            title: "Challenge",
            emoji: "🧺",
            trigger: "cha"
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
                        <Option emoji={item.emoji} href={item.trigger} key={key} name={item.name} title={item.title} setState={setState} />
                    )   
                })
            }
        </ul>
    );
}

export default OptionsList;
