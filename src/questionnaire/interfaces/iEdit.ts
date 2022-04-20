import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iEdit {
    answer: iAnswer;
    question: iFormQuestion;
    handleEditUpdate: (answerValue: iAnswer) => void;
}