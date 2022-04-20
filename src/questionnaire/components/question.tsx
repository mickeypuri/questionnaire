import { useEffect, useState } from "react";
import { iQuestion } from "../interfaces/iQuestion";
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
    answerOptions,
    updateQuestionnaire,
    currentAnswer
}: iQuestion) => {
    const [answerValue, setAnswerValue] = useState(currentAnswer?.answer ?? '');
    const AnswerComponent = getAnswerComponent(responseType);
    const validator = getValidator(responseType);

    const updateAnswerValue = (value : any) => {
        setAnswerValue(value);
        const isValid = validator(value, validateConfig as iValidate);
        updateQuestionnaire({ questionId, answer: value, isValid});
    };

    useEffect(() => {
        setAnswerValue('');
    },[questionId]);

    return (
        <>
            <div className={styles.container}>
                <div >Question {questionNumber}</div>
                <div className={styles.question}>{question}</div>
            </div>
            <div className={styles.answer}>
                <AnswerComponent value={answerValue} onChange={updateAnswerValue} answerOptions={answerOptions}/>
            </div>
        </>
    );
};
