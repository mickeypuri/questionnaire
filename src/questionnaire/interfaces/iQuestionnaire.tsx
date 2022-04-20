import { Stage } from "../enums/Stage";
import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iQuestionnaire extends iQuestionnaireBase {
    topicId: number;
    questionsPerPage?: number;
    submit: (answers: iAnswer[]) => void;
}

export interface iQuestionnaireView extends iQuestionnaireBase {
    stage: Stage,
    handleNext: () => void;
    updateQuestionnaire: (answer: iAnswer) => void;
    errorMsg?: string;
}

interface iQuestionnaireBase {
    questions: iFormQuestion[];
    allowBack?: boolean;
    showSummary?: boolean;
    editFromSummary?: boolean;
}
