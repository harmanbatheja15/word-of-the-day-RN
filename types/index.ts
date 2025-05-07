export interface Word {
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
}

export interface WordWithMeta extends Word {
  id: string;
  date: Date;
}
