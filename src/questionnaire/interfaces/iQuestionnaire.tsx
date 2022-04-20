import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iQuestionnaire extends iQuestionnaireBase {
    topicId: number;
    questionsPerPage?: number;
    submit: (answers: iAnswer[]) => void;
}

export interface iQuestionnaireView extends iQuestionnaireBase {
    handleNext: () => void;
    handleBack: () => void;
    updateQuestionnaire: (answer: iAnswer) => void;
    errorMsg?: string;
}

interface iQuestionnaireBase {
    questions: iFormQuestion[];
    allowBack?: boolean;
}
