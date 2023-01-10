import style from "../../Body.module.scss";
import Option from "./Option";

function OptionsList ({
    isMenuReduced,
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
        {
            name: "Quiz",
            title: "Quiz",
            emoji: "🤖",
            trigger: "qui"
        },
        {
            name: "Perfil",
            title: "Perfil",
            emoji: "😸",
            trigger: "pro"
        },
    ];

    return (
        
        <ul className={style.boList}>
            <li className={style.boItemDescription}>
                {
                    !isMenuReduced
                    ?
                    "Ferramentas"
                    :
                    null
                }
            </li>
            {
                options.map((item, key) => {
                    return (
                        <Option emoji={item.emoji} href={item.trigger} key={key} name={!isMenuReduced ? item.name : null} title={item.title} setState={setState} />
                    )   
                })
            }
        </ul>
    );
}

export default OptionsList;
