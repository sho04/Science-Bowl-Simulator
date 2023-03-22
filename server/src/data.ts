import axios, {AxiosResponse} from 'axios';


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

export async function getRandomQuestion(cat : Array<string>, src : Array<string>) : Promise<questionData> {  

    const options : object = {
        categories : cat,
        sources : src
    }

    let randomQuestion : AxiosResponse;

    try {
        randomQuestion = await axios.post<questionData>('https://scibowldb.com//api/questions/random', options);
        return randomQuestion.data;
    }

    catch (e) {
        console.log(e);
        throw new Error("bruh");
    }
}

