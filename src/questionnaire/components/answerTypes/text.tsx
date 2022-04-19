import React from "react";
import { iAnswerType } from "../../interfaces/iAnswerType";

export const TextAnswer = ({ value, onChange }: iAnswerType) => {

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValue = e.target.value;
        onChange(updatedValue);
    }

    return (
        <input onChange={onTextChange} value={value}></input>
    )
};