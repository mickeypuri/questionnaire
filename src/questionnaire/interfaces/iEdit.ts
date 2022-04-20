import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iEdit {
    currentAnswer: iAnswer;
    question: iFormQuestion;
    handleEditUpdate: (answerValue: iAnswer) => void;
    handleEditEnd: () => void;
    errorMsg?: string;
}