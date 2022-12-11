
import Header from "../Header/Header";
import Logo from "./Components/Logo/Logo";
import OptionsList from "./Components/Options/OptionsList";
import Tools from "./Components/Tools/Tools";
import style from "./Body.module.scss";
import ActionsList from "../Content/Components/ActionsList";
import GuideLine from "../Content/Components/Guideline";

function Body () {

    return (

        <main className={style.bMain}>
            <nav className={style.bNavigation}>
                <Logo />
                <OptionsList />
                <Tools />
            </nav>
            <div className={style.bContent}>
                <Header />
                <ActionsList />
                <GuideLine />
            </div>
        </main>
    );
}

export default Body;
