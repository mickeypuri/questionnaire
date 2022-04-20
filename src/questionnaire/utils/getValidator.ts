import { Response } from "../enums/Response";
import { ValidateCheckBox } from "./validators/validateCheckBox";
import { ValidateDate } from "./validators/validateDate";
import { ValidateDropdown } from "./validators/validateDropDown";
import { ValidateNumber } from "./validators/validateNumber";
import { ValidateRadio } from "./validators/validateRadio";
import { ValidateText } from "./validators/validateText";
import { ValidateTextarea } from "./validators/validateTextArea";

export const getValidator = (responseType :Response) => {
    switch (responseType) { 
        case Response.Checkbox:     return ValidateCheckBox;
        case Response.Date:         return ValidateDate;
        case Response.Dropdown:     return ValidateDropdown;
        case Response.Number:       return ValidateNumber;
        case Response.Radio:        return ValidateRadio;
        case Response.Text:         return ValidateText;
        case Response.TextArea:     return ValidateTextarea;
        default:                    return ValidateText;
    }
};

