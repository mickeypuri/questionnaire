import { iAnswer } from "./iAnswer";

export interface iTopicQuestionnaire {
    topicId: number;
    submitTopic: (answers: iAnswer[]) => void;
}
