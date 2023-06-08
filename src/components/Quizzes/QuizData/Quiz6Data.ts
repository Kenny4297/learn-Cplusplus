
export const Quiz6DataTitle = "Quiz 6: Guessing Game";

export const Quiz6Data = [
    {
        QuestionNumber: 1,

        question: "What is the use of the '#include <ctime>' and '#include <cstdlib>' libraries in our program?",
    
        answer1: "To handle string manipulation and regular expressions",
        answer2: "To generate a seed for our random number generator and provide general purpose functionalities",
        answer3: "To provide functionalities for GUI development",
        answer4: "To handle mathematical operations and computations",
        
        correct: "To generate a seed for our random number generator and provide general purpose functionalities"
    },
    {
        QuestionNumber: 2,

        question: "What does the 'srand(static_cast<unsigned int>(time(0)))' function do in our program?",

        answer1: "It generates a random number between 0 and RAND_MAX",
        answer2: "It creates a seed for the random number generator using the current time",
        answer3: "It converts a string to an integer",
        answer4: "It delays the execution of the program for a specified number of seconds",

        correct: "It creates a seed for the random number generator using the current time"
    },
    {
        QuestionNumber: 3,

        question: "How do we generate a random number between 1 and 10 in C++?",

        answer1: "rand() % 100 + 1",
        answer2: "rand() % 10 + 1",
        answer3: "rand() / 10 + 1",
        answer4: "rand() * 10 + 1",
    
        correct: "rand() % 10 + 1"
    },
    {
        QuestionNumber: 4,

        question: "What is the role of 'while' loops in C++?",

        answer1: "To handle errors",
        answer2: "To define a variable",
        answer3: "To perform a block of code if a certain condition is met",
        answer4: "To repeatedly execute a block of code as long as a condition is true",

        correct: "To repeatedly execute a block of code as long as a condition is true"
    },
    {
        QuestionNumber: 5,

        question: "How do we decrement a variable in C++?",

        answer1: "We use the ++ operator: lives++",
        answer2: "We use the -- operator: lives--",
        answer3: "We use the += operator: lives += 1",
        answer4: "We use the *= operator: lives *= 1",
    
        correct: "We use the -- operator: lives--"
    },
];