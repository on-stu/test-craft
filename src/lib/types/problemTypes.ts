export type TrueOrFalseProblem = {
	question: string;
	answer: boolean;
};

export type MultipleChoiceProblem = {
	question: string;
	answerIndex: number;
	choices: string[];
};

export type SubjectiveProblem = {
	question: string;
	answer: string;
};

export type Problem = TrueOrFalseProblem | MultipleChoiceProblem | SubjectiveProblem;
