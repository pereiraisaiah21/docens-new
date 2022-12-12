import Header from "../Header/Header";
import ActionsList from "../Content/Components/ActionsList";
import GuideLine from "../Content/Components/Guideline";
import Progress from "./Components/Progress/Progress";
import Recommendation from "./Components/Recommendation/Recommendation";
import Subject from "./Components/Subject/Subject";
import Login from "../Login/Login";
import Registration from "../Login/Registration";

function Content () {

    return (

        <section>
            <Header />
            <ActionsList />
            <GuideLine />
            <Progress />
            <Recommendation />

            {/* // Another section */}
            <Subject />
            <Login />
            <Registration />
        </section>
    );
}

export default Content;
