import './App.css';
import { iAnswer } from './questionnaire/interfaces/iAnswer';
import { TopicQuestionnaire } from './TopicQuestionnaire';

function App() {

  const submitTopic = (answers: iAnswer[]) => {
    // To do post answers to an API
    alert(JSON.stringify(answers));
  };

  return (
    <div className="App">
      <TopicQuestionnaire topicId={1} submitTopic={submitTopic} />
    </div>
  );
}

export default App;
