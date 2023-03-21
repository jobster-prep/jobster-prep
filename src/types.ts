export type Question = {
  questionText: string;
  answer: string;
  topic: string;
  flipped: boolean;
};

export type FilterOptionsType = {
  topic1: boolean;
  topic2: boolean;
  topic3: boolean;
  [k: string]: boolean;
};
