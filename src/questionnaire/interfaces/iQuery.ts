import { iValidate } from './iValidate';
import { Response } from '../enums/Response';
import { iMultipleChoice } from './iMultipleChoice';

export interface iQuery {
    questionId: number;
    question: string;
    responseType: Response;
    validate?: iValidate;
    answerOptions?: iMultipleChoice[];
}
