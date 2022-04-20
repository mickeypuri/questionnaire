import { iAnswer } from "./interfaces/iAnswer";
import { iSummary } from "./interfaces/iSummary";

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
        <div>
            <div>Review and Submit</div>
            <table>
                <thead>
                    <th>Question Number</th>
                    <th>Question Id</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Action</th>
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

            <button onClick={ handleSubmit }>Submit Results</button>

       </div>
    )
};

export default Summary;
