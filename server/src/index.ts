import {getRandomQuestion} from './data';
import express, {Express, Request, Response} from 'express';
import cors from 'cors';

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

/*Server */
const app : Express = express();
const port : number = 5000;

let qData : questionData;


async function main() {
    try {
        //const test : questionData = await getRandomQuestion(["CHEMISTRY"], ["Official"]);
        qData = await getRandomQuestion(["CHEMISTRY"], ["Official"]);
        //console.log(qData.question.tossup_question);

    } catch (e) {
        console.log(e);
        throw new Error("BRUH");
    }
};

app.use(cors());

main();

app.get('/questionData', (req : Request, res : Response) => {
    main();
    res.send(qData);
    console.log(qData.question.tossup_question);
});

app.get('/main', (req : Request, res : Response) => {
        console.log("are we serious");
        main();
});

app.listen(port, () => {
    console.log("App listening on port 5000");
});





// Anon exec
// (async () => {
//     try {
//         const test : questionData = await getRandomQuestion(["MATH"], ["Official"]);
//         console.log(test.question.tossup_question);

//     } catch (e) {
//         console.log(e);
//     }
// })();


