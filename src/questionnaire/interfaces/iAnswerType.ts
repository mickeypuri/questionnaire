import { iMultipleChoice } from "./iMultipleChoice";

export interface iAnswerType {
    value: any;
    onChange: (updatedValue: any) => void;
    answerOptions?: iMultipleChoice[];
}
