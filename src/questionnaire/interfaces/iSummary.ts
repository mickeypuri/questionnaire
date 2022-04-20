import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iSummary {
    questions: iFormQuestion[],
    topicAnswers: iAnswer[],
    handleSubmit: () => void;
}