import React from "react";
import { iAnswer } from "./iAnswer";
import { iFormQuestion } from "./iFormQuestion";

export interface iSummary {
    questions: iFormQuestion[],
    topicAnswers: iAnswer[],
    handleSubmit: () => void;
    handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}