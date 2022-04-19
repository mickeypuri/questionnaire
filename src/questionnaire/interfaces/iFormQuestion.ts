import { iAnswer } from './iAnswer';
import { iQuery } from './iQuery';

export interface iFormQuestion extends iQuery {
    questionNumber: number;
    updateQuestionnaire: (answer : iAnswer) => void;
}