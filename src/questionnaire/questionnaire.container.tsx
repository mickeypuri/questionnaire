import { iQuestionnaire } from "./interfaces/iQuestionnaire";
import QuestionnaireView from "./questionnaire.view";

const Questionnaire = ({
    questions,
    questionsPerPage = 1,
    allowBack = true,
    showSummary = true,
    editFromSummary = false
} : iQuestionnaire) => {

    return (
        <QuestionnaireView />
    );
};

export default Questionnaire;
