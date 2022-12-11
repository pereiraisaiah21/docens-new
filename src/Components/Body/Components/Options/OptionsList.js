import style from "../../Body.module.scss";
import Option from "./Option";

function OptionsList () {

    const options = [
        {
            name : "Dashboard",
            title : "Dashboard"
        },
        {
            name : "Conteúdos",
            title : "Dashboard"
        },
        {
            name : "Desafios",
            title : "Dashboard"
        },
    ];

    return (
        
        <ul className={style.boList}>
            {
                options.map((item, key) => {
                    return (
                        <Option href="afsad" name={item.name} title={item.title} />
                    )   
                })
            }
        </ul>
    );
}

export default OptionsList;
