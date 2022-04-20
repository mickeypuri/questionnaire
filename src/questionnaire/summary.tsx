import { iAnswer } from "./interfaces/iAnswer";
import { iSummary } from "./interfaces/iSummary";

const Summary = ({
    questions,
    topicAnswers,
    handleSubmit
}: iSummary) => {

    const questionAnswers = questions.map(_question => {
        const { questionNumber, questionId, question, responseType } = _question;
        const { answer } = topicAnswers.find(topicAnswer => topicAnswer.questionId === questionId ) as iAnswer;
        return { questionNumber, questionId, question, responseType, answer };
    });

    return (
       <table>
           <thead>
               <th>Question Number</th>
               <th>Question Id</th>
               <th>Question</th>
               <th>Answer</th>
           </thead>

            {questionAnswers.map(qa => {
                const {questionNumber, questionId, question, answer} = qa;
                return (
                    <tr>
                        <td>{questionNumber}</td>
                        <td>{questionId}</td>
                        <td>{question}</td>
                        <td>{answer}</td>
                    </tr>
                )
            })}
       </table>
    )
};

export default Summary;
