import { iQuestionnaireView } from "./interfaces/iQuestionnaire";


const QuestionnaireView = ({
    questions,
    questionsPerPage,
    allowBack,
    showSummary,
    editFromSummary,
    stage,
    updateQuestionnaire,
    errorMsg
}: iQuestionnaireView) => {

    return (
        <div>Questionnaire View</div>
    );
};

export default QuestionnaireView;