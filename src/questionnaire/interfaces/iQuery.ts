import { iValidate } from './iValidate';
import { Response } from './Response';

export interface iQuery {
    questionId: number;
    question: string;
    responseType: Response;
    validate?: iValidate;
}
