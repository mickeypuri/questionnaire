import { iAnswer } from "./interfaces/iAnswer";
import { iSummary } from "./interfaces/iSummary";
import styles from './summary.module.css';

const Summary = ({
    questions,
    topicAnswers,
    handleSubmit,
    handleEdit
}: iSummary) => {

    const questionAnswers = questions.map(_question => {
        const { questionNumber, questionId, question, responseType } = _question;
        const { answer } = topicAnswers.find(topicAnswer => topicAnswer.questionId === questionId ) as iAnswer;
        return { questionNumber, questionId, question, responseType, answer };
    });

    return (
        <div className={styles.container}>
            <div className={styles.title}>Review and Submit</div>
            <table>
                <thead>
                    <th>Number</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Edit</th>
                </thead>

                    {questionAnswers.map(qa => {
                        const {questionNumber, questionId, question, answer} = qa;
                        return (
                            <tr key={questionId}>
                                <td>{questionNumber}</td>
                                <td>{question}</td>
                                <td>{answer}</td>
                                <td><button data-questionId={questionId} onClick={handleEdit}>Edit</button></td>
                            </tr>
                        )
                    })}
            </table>

            <button className={styles.buttons} onClick={ handleSubmit }>Submit Results</button>

       </div>
    )
};

export default Summary;
