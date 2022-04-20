import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iQuestion extends iFormQuestion {
    updateQuestionnaire: (answer: iAnswer) => void;
    currentAnswer?: iAnswer;
}
