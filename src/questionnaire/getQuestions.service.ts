import { iQuestionRepo } from './interfaces/iQuestionRepo';
import questionRepo from './questionsRepo.json';

export const getQuestions = (topicId: number) => {
    return (questionRepo as iQuestionRepo)[topicId];
}