import { iValidate } from "../../interfaces/iValidate";

export const ValidateText = (value: any, validateConfig: iValidate) => {
    // Todo
    const { minLength } = validateConfig;

    return value?.length > (minLength as number);
};
