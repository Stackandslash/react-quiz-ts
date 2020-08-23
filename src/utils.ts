export const shuffleArray= (array: any[]) => 
[...array].sort(() => Math.random() - 0.5); //quick and dirty randomizer, not ideal.