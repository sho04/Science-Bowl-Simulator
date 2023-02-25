import {getRandomQuestion} from './data';
import express from 'express';

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
// const app : Express = express();
// const port : number = 3000;

async function main() {
    try {
        const test : questionData = await getRandomQuestion(["CHEMISTRY"], ["Official"]);
        console.log(test.question.tossup_question);

    } catch (e) {
        console.log(e);
    }
};

main();




// Anon exec
// (async () => {
//     try {
//         const test : questionData = await getRandomQuestion(["MATH"], ["Official"]);
//         console.log(test.question.tossup_question);

//     } catch (e) {
//         console.log(e);
//     }
// })();


