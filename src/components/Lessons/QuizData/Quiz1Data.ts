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

export const Quiz1DataTitle = "Introduction To C++";

const Quiz1Data = [
    {
        QuizLessonNumber: 1,
        QuestionNumber: 1,
        QuizTitle: "Introduction to C++: Origin and Usage",
        // img : Olu,
        // question : `C++ is a high-level, general-purpose programming language that is recognized for its versatility and performance. Created by Bjarne Stroustrup at Bell Labs in 1985, it was an enhancement of the C language and added object-oriented features, among others. Today, C++ is widely used in system software, application software, high-performance server and client applications, and even in video games.`,
        question : `What kind of language is C++?`,

        answer1: "Low-level, specific purpose language",
        answer2: "High-level, specific purpose language",
        answer3: "Low-level, general-purpose language",
        answer4: "High-level, general-purpose language",

        correct: "High-level, general-purpose language"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 2,
        QuizTitle: "Object-Oriented Programming in C++: Emphasizing Structure and Reusability",
        // img : Olu,
        // disc : `One of the distinguishing features of C++ is its emphasis on object-oriented programming (OOP). This approach allows data and functions to be bundled into blocks known as "objects", which can then interact with one another. This promotes a clear structure and makes the code more maintainable and reusable. Class hierarchies and inheritance are also features that C++ offers, which allow for more complex abstractions and better code organization.`,
        question : `Why is object-oriented programming (OOP) important in programming?`,
        answer1: "Physical objects don't exist in the world of digital programming",
        answer2: "It allows data to be bundled into blocks knows as objects, which can then interact with each other",
        answer3: "Object-oriented programming is actually not important, and other methods are always better",
        answer4: "Object-oriented programming is faster and more accurate computational-wise than non OOP",
        correct: "It allows data to be bundled into blocks knows as objects, which can then interact with each other"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 3,
        QuizTitle: "Low-Level Features in C++",
        // img : Olu,
        // disc : `However, unlike some other high-level languages, C++ also provides low-level features and gives programmers a high degree of control over system resources and memory. This combination of high-level and low-level features makes C++ a "middle-level" language in some respects. It's this flexibility that enables C++ to be used in a wide variety of applications, from GUIs to high-performance scientific simulations.`,
        question : `Why are low level features important to have in a programming language?`,

        answer1: "Low-level features allow balance and flexibility for the developer",
        answer2: "C++ does not have low-level features since it is a high-level language",
        answer3: "Low-level features are not important at all, but C++ has them for niche situations",
        answer4: "Low-level features bad, high-level features good",

        correct: "Low-level features allow balance and flexibility for the developer"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 4,
        QuizTitle: "The Multi-Paradigm Nature of C++",
        // img : Olu,
        // disc : `C++ also supports procedural programming, making it a multi-paradigm language. This allows developers to choose the most suitable approach for a given task, whether it's procedural, object-oriented, or a combination of the two. The versatility of C++ is further enhanced by its support for generic programming, a style where types are parameterized, allowing for high reusability and flexibility in functions and classes.`,
        question : `In addition to object-oriented programming (OOP), C++ has what other type of programming?`,

        answer1: "Automatic",
        answer2: "Procedural",
        answer3: "Assembly",
        answer4: "C++ contains no other type of programming; OOP can do every thing",

        correct: "Procedural"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 5,
        QuizTitle: "Efficiency in Various Applications",
        // img : Olu,
        // disc : `The performance of C++ is another significant advantage. As a statically-typed and compiled language, C++ programs often run more efficiently than dynamically-typed or interpreted languages. This is one reason why C++ is commonly used in areas where performance is paramount, such as in game development, real-time systems, and high-frequency trading.`,
        question : `Name another incredibly important feature of C++:`,

        answer1: "C++ needs to be transpiled, which makes the language incredibly fast",
        answer2: "C++ is incredibly slow, which gives the other languages a fair chance in outputting",
        answer3: "C++ is not very fast at all, but it's many features make up for it's lack in speed",
        answer4: "C++ is incredibly fast",

        correct: "C++ is incredibly fast"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 6,
        QuizTitle: "The Rich Standard Library and Standard Template Library in C++",
        // img : Olu,
        // disc : `C++ has a rich Standard Library that provides several in-built functions for a variety of tasks. This library includes functions for file handling, mathematical computations, and dealing with time. The Standard Template Library (STL) is a part of the Standard Library and provides several generic classes and functions, including collections like vectors and lists, algorithms, iterators, and more.`,

        question : `True or False: C++ contains a rich standard library:`,

        answer1: "True",
        answer2: "False",

        correct: "True"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 7,
        QuizTitle: "Challenges in C++",
        // img : Olu,
        // disc : `However, C++ is not without its challenges. Memory management in C++ is manual, which means that the programmer is responsible for allocating and de-allocating memory. This can lead to errors and bugs if not managed correctly. The complexity of the language is another aspect that could be daunting for beginners.`,

        question : `What is the biggest challenge for the developer in C++?`,

        answer1: "Memory Management and the complexity of the language",
        answer2: "OOP and procedural programming ",
        answer3: "You must know C to work with C++",
        answer4: "C++ is actually easier to learn than Python",

        correct: "Memory Management"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 8,
        QuizTitle: "The Value of Learning C++",
        // img : Olu,
        // disc : `Despite its challenges, learning C++ is worth it, not just because of its capabilities and the control it gives, but also because it is the foundation upon which many other languages are built or influenced. Understanding C++ can make learning languages like Java, C#, and JavaScript easier.`,

        question : `Why is learning C++ so important to beginning developers?`,

        answer1: "C++ is not important since no other language (other than C and C#) are similar",
        answer2: "C++ is the foundation and influence for other programming languages",
        answer3: "C++ is important since it is the best language for programming anything",
        answer4: "C++ is important to learn because it's incredibly easy to learn",

        correct: "It is the foundation and influence for other programming languages"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 9,
        QuizTitle: "The Evolution and Standards of C++",
        // img : Olu,
        // disc : `Today, the development and evolution of C++ is managed by the C++ Standards Committee. The language has undergone several revisions over the years, and each revision introduces new features and enhancements to make the language more efficient and user-friendly.`,

        question : `True or False: Due to the age and efficiency of C++, C++ is no longer updated, but supported by a community:`,

        answer1: "True",
        answer2: "False",

        correct: "True"
    },
    {
        QuizLessonNumber: 1,
        QuestionNumber: 10,
        QuizTitle: "Conclusion: The Enduring Importance of C++ in the Programming World",
        // img : Olu,
        // disc : `In conclusion, C++ is a powerful, versatile, and efficient programming language that is widely used in a variety of application domains. It provides the convenience of high-level features while still granting the programmer a high degree of control. Despite the steep learning curve and manual memory management, its wide application and performance make it an enduring and important language in the world of programming.`,

        question : `Why is C++ important as a language?`,

        answer1: "Every other programming language is based on C++",
        answer2: "C++ is the best programming language for all purposes",
        answer3: "It allows the developer to use high-level features with a high degree of control",
        answer4: "C++ is only a popular language, it isn't that important",

        correct: "It allows the developer to use high-level features with a high degree of control"
    },

    //  QUIZ 2
    
];

export default Quiz1Data;