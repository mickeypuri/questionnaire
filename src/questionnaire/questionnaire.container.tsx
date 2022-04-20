import { useEffect, useState } from 'react';
import { Stage } from './enums/Stage';
import { iAnswer } from './interfaces/iAnswer';
import { iFormQuestion } from './interfaces/iFormQuestion';
import { iQuestionnaire } from "./interfaces/iQuestionnaire";
import QuestionnaireView from "./questionnaire.view";
import Summary from "./summary";
import Edit from "./edit";

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
    const [editQuestion, setEditQuestion] = useState<iFormQuestion | null>(null);
    const [editAnswer, setEditAnswer] = useState<iAnswer | null>(null);

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

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        const dataQuestionId = (e.target as HTMLButtonElement).getAttribute('data-questionId') as string;
        const questionId = parseInt(dataQuestionId);
        const _editQuestion = questions.find(question => question.questionId === questionId) as iFormQuestion;
        const _editAnswer = topicAnswers.find(topicAnswer => topicAnswer.questionId === questionId) as iAnswer;
        setEditQuestion(_editQuestion);
        setEditAnswer(_editAnswer);
    }

    const handleEditUpdate = (answerValue: iAnswer) => {
        updateQuestionnaire(answerValue);
        setStage(Stage.Summary);
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
        handleSubmit,
        handleEdit
    }

    const editProps = {
        answer: editAnswer as iAnswer,
        question: editQuestion as iFormQuestion,
        handleEditUpdate
    };

    const isEntry = stage === Stage.Entry;
    const isSummary = stage === Stage.Summary;
    const isEdit = stage === Stage.Edit;

    return (
        <>
            {isEntry && <QuestionnaireView {...entryViewProps} />}
            {isSummary && <Summary {...summaryProps} />}
            {isEdit && <Edit {...editProps} />}
        </>
    )

};

export default Questionnaire;
