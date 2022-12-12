
import Header from "../Header/Header";
import Logo from "./Components/Logo/Logo";
import OptionsList from "./Components/Options/OptionsList";
import Tools from "./Components/Tools/Tools";
import style from "./Body.module.scss";
import Content from "../Content/Content";
import Navigation from "./Components/Navigation/Navigation";

function Body () {

    return (

        <main className={style.bMain}>
            <Navigation />
            <div className={style.bContent}>
                <Content />
            </div>
        </main>
    );
}

export default Body;
