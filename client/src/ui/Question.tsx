import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useStopwatch } from 'react-timer-hook';

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

function checkAnswer(answer : string, tossup_format : string) {

}



function Question() {

    // Timer Init
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: true });

    // Question States
    const [text, setText] = useState("w");
    const [state, setState] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [formInput, setFormInput] = useState("");

    // Question states
    const [isBonus, setBonus] = useState(false);
    const [isTossup, setTossup] = useState(true);
    const [hasSubmit, setSubmit] = useState(false);
    const [tossupCorrect, setTossupCorrect] = useState(false);
    const [bonusCorrect, setBonusCorrect] = useState(false);
    const [buzz, setBuzz] = useState(false);

    const [questionStatus, setQuestionStatus] = useState("");

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

    const handleSubmit = () => {

      if (buzz) {
        if (questionData.question.tossup_answer == formInput) {
          console.log("correct");
          setQuestionStatus("Correct!");
        } else {
          console.log("incorrect");
          setQuestionStatus("Incorrect");
        }
      }
    }

    useEffect(() => {
        //setBuzz(false);
        (async () => {

          await fetch("http://localhost:3000/questionData", {
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

    useEffect(() => {
      if (seconds == 7) {
        pause();
      }
    }, [seconds])


    return (
      <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <div>
          {seconds}
          
        </div>

        <div>
          {questionStatus}
        </div>

        <div>
          {!isLoading ? JSON.stringify(questionData.question.tossup_question) : "Loading..."}
          {questionData.question.tossup_answer}
        </div>

        <div>
          <form onSubmit={(e) => {
                handleSubmit();
                e.preventDefault();
              }}>
            <TextField id="outlined-basic" label="answer" variant="standard" onChange={(e) => {setFormInput(e.target.value)}} />
            <Button type="submit"variant="contained" color="primary">
              Submit answer
            </Button>
          </form>
        </div>

        <div>
          <Button sx={{ textAlign: 'center'}} variant="text" onClick = {() => {
              if (!buzz) {
                setBuzz(true);
                console.log(buzz);
                pause();
              } else {
                setBuzz(false);
                start();
              }

              console.log(buzz);
            }}>   
              Buzz
            </Button>  
          </div>

        <div>
        
            <Button sx={{ textAlign: 'center'}} variant="text" onClick = {() => {
              setState(state + 1);
              reset();
            }}>   
              Get new question
            </Button>  
        </div>      
      </Box>
    );
  }
  
  export default Question;