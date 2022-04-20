import { CheckboxAnswer } from "../components/answerTypes/checkbox";
import { DateAnswer } from "../components/answerTypes/date";
import { DropdownAnswer } from "../components/answerTypes/dropdown";
import { NumberAnswer } from "../components/answerTypes/number";
import { RadioAnswer } from "../components/answerTypes/radio";
import { TextAnswer } from "../components/answerTypes/text";
import { TextAreaAnswer } from "../components/answerTypes/textarea";
import { Response } from "../enums/Response";

export const getAnswerComponent = (responseType : Response) => {
    switch (responseType) { 
        case Response.Checkbox: return CheckboxAnswer;
        case Response.Date: return DateAnswer;
        case Response.Dropdown: return DropdownAnswer;
        case Response.Number: return NumberAnswer;
        case Response.Radio: return RadioAnswer;
        case Response.Text: return TextAnswer;
        case Response.TextArea: return TextAreaAnswer;
        default: return TextAnswer;
    }
};

