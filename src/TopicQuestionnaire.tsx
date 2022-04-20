import { useEffect, useState } from 'react';
import { getQuestions } from './questionnaire/getQuestions.service';
import { iTopicQuestionnaire } from './questionnaire/interfaces/iTopicQuestionnaire';
import { iFormQuestion } from './questionnaire/interfaces/iFormQuestion';
import Questionnaire from './questionnaire/questionnaire.container';
import { iAnswer } from './questionnaire/interfaces/iAnswer';

export const TopicQuestionnaire = ({
    topicId,
    submitTopic
}: iTopicQuestionnaire) => {
    const [questions, setQuestions]  = useState<iFormQuestion[] | null>(null);

    const submit = (answers: iAnswer[]) => {
        submitTopic(answers);
    };

    useEffect(() => {
        const _questions = getQuestions(topicId);
        const formQuestions: iFormQuestion[] = _questions.map((_question, index) => ({ ..._question, questionNumber: index + 1  }));
        setQuestions(formQuestions);
    }, [topicId]);

    return (
        <Questionnaire questions={questions as iFormQuestion[]} topicId={topicId} submit={submit} questionsPerPage={1} />
    );
};

