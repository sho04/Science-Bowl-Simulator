declare module 'main' {
    export type data = {
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
    
    export type questionData = {
        question : data;
    }
}
