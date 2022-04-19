import { useState } from "react";
import { iFormQuestion } from "../interfaces/iFormQuestion";
import { iValidate } from "../interfaces/iValidate";
import { getAnswerComponent } from "../utils/getAnswerComponent";
import { getValidator } from "../utils/getValidator";
import styles from "./question.module.css";

export const Question = ({
    questionNumber,
    questionId,
    question,
    responseType,
    validate: validateConfig,
    updateQuestionnaire
}: iFormQuestion) => {
    const [answerValue, setAnswerValue] = useState(null);
    const AnswerComponent = getAnswerComponent(responseType);
    const validator = getValidator(responseType);

    const updateAnswerValue = (value : any) => {
        setAnswerValue(value);
        const isValid = validator(value, validateConfig as iValidate);
        updateQuestionnaire({ questionId, answer: value, isValid});
    };

    return (
        <>
            <div className={styles.container}>
                <div>Question {questionNumber}</div>
                <div>{question}</div>
            </div>
            <AnswerComponent value={answerValue} onChange={updateAnswerValue}/>
        </>
    );
};
