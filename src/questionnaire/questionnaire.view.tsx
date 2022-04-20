import { iQuestionnaireView } from "./interfaces/iQuestionnaire";
import { Question } from './components/question';


const QuestionnaireView = ({
    questions,
    allowBack,
    handleBack,
    handleNext,
    updateQuestionnaire,
    errorMsg
}: iQuestionnaireView) => {

    return (
        <div>
           { errorMsg && (
                <div>
                    {errorMsg}
                </div>   
            )}

           {questions.map(question => (
               <Question {...question} updateQuestionnaire={updateQuestionnaire} />
           ))}

           <div>
               {allowBack && <button onClick={handleBack}>Back</button> }
               <button onClick={handleNext}>Next</button>
           </div>

        </div>
    );
};

export default QuestionnaireView;