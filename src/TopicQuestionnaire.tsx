import { useEffect, useState } from 'react';
import { getQuestions } from './questionnaire/getQuestions.service';
import { iTopicQuestionnaire } from './questionnaire/interfaces/iQuestionSequence';
import { iFormQuestion } from './questionnaire/interfaces/iFormQuestion';
import Questionnaire from './questionnaire/questionnaire.container';

export const TopicQuestionnaire = ({
    topicId
}: iTopicQuestionnaire) => {
    const [questions, setQuestions]  = useState<iFormQuestion[] | null>(null);

    const updateQuestionnaire = () => {};

    useEffect(() => {
        const _questions = getQuestions(topicId);
        const formQuestions: iFormQuestion[] = _questions.map((_question, questionNumber) => ({ ..._question, questionNumber, updateQuestionnaire }));
        setQuestions(formQuestions);
    }, [topicId]);

    return (
        <Questionnaire questions={questions as iFormQuestion[]} />
    );
};

