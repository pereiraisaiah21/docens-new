import Header from "../Header/Header";
import ActionsList from "../Content/Components/ActionsList";
import GuideLine from "../Content/Components/Guideline";
import Progress from "./Components/Progress/Progress";
import Recommendation from "./Components/Recommendation/Recommendation";

function Content () {

    return (

        <section>
            <Header />
            <ActionsList />
            <GuideLine />
            <Progress />
            <Recommendation />
        </section>
    );
}

export default Content;
