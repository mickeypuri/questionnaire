import { iQuestionnaireView } from "./interfaces/iQuestionnaire";
import { Question } from './components/question';
import styles from './questionnaire.module.css';

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

           {questions.map(question => (
               <Question {...question} updateQuestionnaire={updateQuestionnaire} />
           ))}

           <div className={styles.buttons}>
               {allowBack && <button onClick={handleBack}>Back</button> }
               <button onClick={handleNext}>Next</button>
           </div>

           { errorMsg && (
                <div className={styles.error}>
                    {errorMsg}
                </div>   
            )}

        </div>
    );
};

export default QuestionnaireView;