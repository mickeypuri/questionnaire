import { iEdit } from "./interfaces/iEdit";
import { Question } from './components/question';
import styles from './questionnaire.module.css';

const Edit = ({
    currentAnswer,
    question,
    errorMsg,
    handleEditUpdate,
    handleEditEnd,
}: iEdit) => {

    return (
        <div>

            <Question {...question} updateQuestionnaire={handleEditUpdate} currentAnswer={currentAnswer} />

           <div className={styles.buttons}>
               <button onClick={handleEditEnd}>Update</button>
           </div>

           { errorMsg && (
                <div className={styles.error}>
                    {errorMsg}
                </div>   
            )}

        </div>
    )

};

export default Edit;