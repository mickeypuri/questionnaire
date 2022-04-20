import { useEffect, useState } from 'react';
import { Stage } from './enums/Stage';
import { iAnswer } from './interfaces/iAnswer';
import { iFormQuestion } from './interfaces/iFormQuestion';
import { iQuestionnaire } from "./interfaces/iQuestionnaire";
import QuestionnaireView from "./questionnaire.view";
import Summary from "./summary";

const Questionnaire = ({
    questions,
    questionsPerPage = 1,
    allowBack = true,
    showSummary = true,
    editFromSummary = false,
    topicId,
    submit
} : iQuestionnaire) => {
    // Todo replace the multiple useState with a single useReducer
    const [stage, setStage] = useState(Stage.Entry);
    const [pageAnswers, setPageAnswers] = useState<iAnswer[] | []>([]);
    const [topicAnswers, setTopicAnswers] = useState<iAnswer[] | []>([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [pageQuestions, setPageQuestions] = useState<iFormQuestion[] | []>([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        setStage(Stage.Entry);
        setQuestionIndex(0);
    }, [topicId]);

    useEffect(() => {
        const lastQuestionIndex = questionIndex + questionsPerPage;
        setPageQuestions(questions.slice(questionIndex, lastQuestionIndex));
    }, [questionIndex, questions, questionsPerPage]);

    const updateQuestionnaire = (answerValue: iAnswer) => {
        const updatedAnswers = pageAnswers.some(answer => answer.questionId === answerValue.questionId) ? 
            pageAnswers.map(answer => answer.questionId === answerValue.questionId ? answerValue : answer) :
            [...pageAnswers, answerValue];
        setPageAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (pageAnswers.some(answer => !answer.isValid)) {
            setErrorMsg('Some responses are not valid, please fix before proceeding');
        } else {
            setTopicAnswers([...topicAnswers, ...pageAnswers]);
            const nextIndex = questionIndex + questionsPerPage;
            if (nextIndex > questions.length - 1) {
                setStage(Stage.Summary);
            } else {
                setQuestionIndex(nextIndex);
            }

        }
    };

    const handleSubmit = () => {
        submit(topicAnswers);
    };

    const entryViewProps = {
        questions: pageQuestions,
        allowBack,
        showSummary,
        editFromSummary,
        stage, 
        handleNext, 
        updateQuestionnaire,
        errorMsg
    };

    const summaryProps = {
        questions,
        topicAnswers,
        handleSubmit
    }

    const isEntry = stage === Stage.Entry;
    const isSummary = stage === Stage.Summary;


    return (
        <>
            {isEntry && <QuestionnaireView {...entryViewProps} />}
            {isSummary && <Summary {...summaryProps} />}
        
        </>
    )

};

export default Questionnaire;
