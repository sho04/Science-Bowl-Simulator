import {useEffect, useState} from 'react';

/*Data Types */

type data = {
    api_url: string,
    bonus_answer: string,
    bonus_format: string,
    bonus_question: string,
    category: string,
    id: string,
    search_vector: string,
    source: string,
    tossup_answer: string,
    tossup_question: string,
    uri: string,
}

type questionData = {
  question : data;
}


function Question() {

    const [text, setText] = useState("w");
    const [state, setState] = useState(0);
    const [isLoading, setLoading] = useState(true);

    const [questionData, setQuestionData] = useState({
        question : {
          api_url: "",
          bonus_answer: "",
          bonus_format: "",
          bonus_question: "",
          category: "",
          id: "",
          search_vector: "",
          source: "",
          tossup_answer: "",
          tossup_question: "",
          uri: ""
        }
    });

    useEffect(() => {
        (async () => {

          await fetch("http://localhost:5000/questionData", {
            method : 'GET'
          })
          .then((req) => req.json())
          .then((data) => {
              //console.log(data);
              setQuestionData(data);
              console.log(questionData.question.tossup_question);
              //setState(state + 1);
              setLoading(false);
          })
        })();
    }, [state]);


    return (
      <div>
        <header>
          {!isLoading ? JSON.stringify(questionData.question.tossup_question) : "Loading..."}
          <button onClick = {() => {
              setState(state + 1);
              }}>
                
            Click me</button>        
        </header>
      </div>
    );
  }
  
  export default Question;