export type Question = {
  questionText: string;
  answer: string;
  topic: string;
  flipped: boolean;
};

export type FilterOptionsType = {
  [k: string]: boolean;
};
