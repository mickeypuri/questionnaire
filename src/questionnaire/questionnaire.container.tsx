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
    topicId,
    submit
} : iQuestionnaire) => {
    // Todo Replace the complex state and multiple useState's with a single useReducer hook
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
        if (questions) {
            const lastQuestionIndex = questionIndex + questionsPerPage;
            const _pageQuestions = questions.slice(questionIndex, lastQuestionIndex);
            const _pageAnswers = topicAnswers.filter(answer => _pageQuestions.some(question => question.questionId === answer.questionId));
            setPageQuestions(_pageQuestions);
            setPageAnswers(_pageAnswers);
        }
    }, [questionIndex, questions, questionsPerPage, topicAnswers]);

    const updateQuestionnaire = (answerValue: iAnswer) => {
        const updatedAnswers = pageAnswers.some(answer => answer.questionId === answerValue.questionId) ? 
            pageAnswers.map(answer => answer.questionId === answerValue.questionId ? answerValue : answer) :
            [...pageAnswers, answerValue];
        setPageAnswers(updatedAnswers);
    };

    const handleBack = () => {
        const _questionIndex = questionIndex - questionsPerPage;
        if (_questionIndex >= 0) {
            setQuestionIndex(_questionIndex);
            setErrorMsg('');
        }
    }

    const handleNext = () => {
        if (pageAnswers.some(answer => !answer.isValid) || pageAnswers.length !== pageQuestions.length) {
            setErrorMsg('Some responses are not valid, please fix before proceeding');
        } else {
            setErrorMsg('');
            setTopicAnswers([...new Set([...topicAnswers, ...pageAnswers])]);
            setPageAnswers([]);
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
        setStage(Stage.Edit);
    }

    const handleEditUpdate = (answerValue: iAnswer) => {
        if (answerValue.isValid) {
            setErrorMsg('');
            const editedAnswers = topicAnswers.map(answer => answer.questionId === answerValue.questionId ? answerValue : answer);
            setTopicAnswers(editedAnswers);
        } else {
            setErrorMsg('Please enter a valid response');
        }
    };

    const handleSubmit = () => {
        submit(topicAnswers);
    };

    const handleEditEnd = () => {
        setStage(Stage.Summary);
    };

    const entryViewProps = {
        questions: pageQuestions,
        allowBack,
        handleBack,
        handleNext,
        updateQuestionnaire,
        errorMsg,
        topicAnswers
    };

    const summaryProps = {
        questions,
        topicAnswers,
        handleSubmit,
        handleEdit
    }

    const editProps = {
        currentAnswer: editAnswer as iAnswer,
        question: editQuestion as iFormQuestion,
        errorMsg,
        handleEditUpdate,
        handleEditEnd
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
