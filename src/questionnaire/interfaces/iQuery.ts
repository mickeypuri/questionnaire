import { iValidate } from './iValidate';
import { Response } from '../enums/Response';

export interface iMultipleChoice {
    description: string,
    optionId?: number;
}

export interface iQuery {
    questionId: number;
    question: string;
    responseType: Response;
    validate?: iValidate;
    answerOptions?: iMultipleChoice[];
}
