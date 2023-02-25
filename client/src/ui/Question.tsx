import {useEffect, useState} from 'react';

/*Data Types */

// type data = {
//     api_url: string,
//     bonus_answer: string,
//     bonus_format: string,
//     bonus_question: string,
//     category: string,
//     id: string,
//     search_vector: string,
//     source: string,
//     tossup_answer: string,
//     tossup_question: string,
//     uri: string,
// }

function Question() {

    const [text, setText] = useState("w");
    const [questionData, setQuestionData] = useState({
        question : {
            tossup_question: ""
        }
    });

    useEffect(() => {
        fetch("http://localhost:5000/questionData")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setQuestionData(data);
        })
    }, []);

    return (
      <div>
        <header>
          {JSON.stringify(questionData.question.tossup_question)}        
        </header>
      </div>
    );
  }
  
  export default Question;