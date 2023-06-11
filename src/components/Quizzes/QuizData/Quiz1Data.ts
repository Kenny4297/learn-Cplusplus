export interface QuizSlideInterface {
    QuestionNumber: number;
    QuizTitle: string;
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correct: string;
    img?: string; // '?' indicates that img is optional
}

export const Quiz1DataTitle = "Quiz 1: Introduction To C++";

export const Quiz1Data = [
    {
        QuestionNumber: 1,

        question : `What kind of language is C++?`,

        answer1: "Low-level, specific purpose language",
        answer2: "High-level, specific purpose language",
        answer3: "Low-level, general-purpose language",
        answer4: "High-level, general-purpose language",

        correct: "High-level, general-purpose language"
    },
    {
        QuestionNumber: 2,

        question : `Why is object-oriented programming (OOP) important in programming?`,

        answer1: "Physical objects don't exist in the world of digital programming",
        answer2: "It allows data and behaviors to be bundled into objects, which can then interact with each other",
        answer3: "Object-oriented programming is actually not important, and other methods are always better",
        answer4: "Object-oriented programming's performance depends on various factors and can't be generalized as faster or slower than non-OOP",

        correct: "It allows data and behaviors to be bundled into objects, which can then interact with each other"
    },
    {
        QuestionNumber: 3,

        question : `Why are low level features important to have in a programming language?`,

        answer1: "Low-level features allow balance and flexibility for the developer",
        answer2: "C++ does not have low-level features since it is a high-level language",
        answer3: "Low-level features are not important at all, but C++ has them for niche situations",
        answer4: "Low-level features bad, high-level features good",

        correct: "Low-level features allow balance and flexibility for the developer"
    },
    {
        QuestionNumber: 4,

        question : `In addition to object-oriented programming (OOP), C++ has what other type of programming?`,

        answer1: "Automatic",
        answer2: "Procedural",
        answer3: "Assembly",
        answer4: "C++ contains no other type of programming; OOP can do everything",

        correct: "Procedural"
    },
    {
        QuestionNumber: 5,

        question : `Name another incredibly important feature of C++:`,

        answer1: "C++ needs to be transpiled, which makes the language incredibly fast",
        answer2: "C++ is incredibly slow, which gives the other languages a fair chance in outputting",
        answer3: "C++ is not very fast at all, but it's many features make up for it's lack in speed",
        answer4: "C++ is incredibly fast",

        correct: "C++ is incredibly fast"
    },
    {
        QuestionNumber: 6,

        question : `True or False: C++ contains a rich standard library:`,

        answer1: "True",
        answer2: "False",

        correct: "True"
    },
    {
        QuestionNumber: 7,

        question : `What is the biggest challenge for the developer in C++?`,

        answer1: "Memory Management and the complexity of the language",
        answer2: "OOP and procedural programming",
        answer3: "You must know C to work with C++",
        answer4: "C++ is actually easier to learn than Python",

        correct: "Memory Management and the complexity of the language",
    },
    {
        QuestionNumber: 8,

        question : `Why is learning C++ so important to beginning developers?`,

        answer1: "It is not important since no other language (other than C and C#) are similar",
        answer2: "It is the foundation and influence for other programming languages",
        answer3: "It is important since it is the best language for programming anything",
        answer4: "It is important to learn because it's incredibly easy to learn",

        correct: "It is the foundation and influence for other programming languages"
    },
    {
        QuestionNumber: 9,

        question : `True or False: Due to the age and efficiency of C++, C++ is no longer updated, but supported by a community:`,

        answer1: "True",
        answer2: "False",

        correct: "False",
    },
    {
        QuestionNumber: 10,
        
        question : `Why is C++ important as a language?`,

        answer1: "Every other programming language is based on C++",
        answer2: "C++ is the best programming language for all purposes",
        answer3: "It allows the developer to use high-level features with a high degree of control",
        answer4: "C++ is only a popular language, it isn't that important",

        correct: "It allows the developer to use high-level features with a high degree of control"
    },
];
