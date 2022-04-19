import { iFormQuestion } from "./iFormQuestion";

export interface iQuestionnaire {
    questions: iFormQuestion[];
    questionsPerPage?: number;
    allowBack?: boolean;
    showSummary?: boolean;
    editFromSummary?: boolean;
}
