export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    //First we await fetch, then we await the json conversion
    const data = await (await fetch(endpoint)).json();
    console.log(data);
}