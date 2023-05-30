export const Lesson5DataTitle = "Calculator";

export const Lesson5Data = [
    {
        SlideNumber: 1,
        SlideTitle: "Build a Calculator",
        disc: `In this project, we will be building a calculator that will be able to perform simple mathematical functions. As in any programming language, we will be using the fundamentals that we have learned and building on top of them. Feel free to visit the previous lessons to get a better understanding of the concepts discussed, since moving forward without being somewhat comfortable is dangerous!
        `,
    },
    {
        SlideNumber: 2,
        SlideTitle: "Integer Variable",
        disc: `Variables in C++ are named entities that can store data. They have a type that determines what kind of data they can hold. In our calculator, we will be using integer variables (int num1, num2;) to store the numbers for our calculations, and a character variable (char operation;) to store the operator.`,
        code: `
        int num1, num2;
        char operation;
        `,
    },
    {
        SlideNumber: 3,
        SlideTitle: "User Input",
        disc: ` To accept user input, we use the **std::cin** object. When you use **std::cin >> variable;**, it waits for the user to enter something and then stores the input into the specified variable. We will use this in our calculator program to capture the numbers and the operation that the user wants to perform. This is EXACTLY what we did in the previous project. I just thought a refresher would be nice!`,
        code:`        
        std::cout << "Enter first number: ";
        std::cin >> num1;    
        `
    },

    {
        SlideNumber: 4,
        SlideTitle: "Conditional Statements",
        disc: `Conditional statements (if statements) in C++ allow the program to perform different actions based on whether a certain condition is true or false. In our calculator, we will use an if statement to check if the user is trying to divide by zero, which is not allowed in mathematics. <br> In the code below, we start the if statement with an 'if'. We are saying that "if what ever is in the '()' is true, the code in the '{}] below will execute". More specifically, we are saying "If the number that was stored in 'num2' does not equal zero, we will print the result to the terminal". More on the '!=' next! `,
        code:`
        if(num2 != 0) {
            std::cout << "The result is: " << num1 / num2 << std::endl;
        } 

        `
    },

    {
        SlideNumber: 5,
        SlideTitle: "Operators",
        disc: `Operators in C++ are symbols used to perform operations on values and variables. Here's a simplified list of basic operators: <br>
        **Arithmetic:** Addition (+), Subtraction (-), Multiplication (*) and Division (/). <br>
        **Comparison:** Equals to (==), Not equal to (!=), Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=).
        **Logical:** These are a bit complex and will not be used in this application, but they are good to know: Logical AND (&&), Logical OR (||), Logical NOT (!). <br>`,
        code:`
        std::cout << "Enter first number: ";
        std::cin >> num1; // User enters 5

        // Num1 is 5

        if(num2 > 1) {
            std::cout << "Yes, num1 is in fact greater than 1"; //This line would execute, since 5 is greater than 1
        } else {
            std::cout << "No, num1 is not in fact greater than 1";
        }`
    },

    {
        SlideNumber: 6,
        SlideTitle: "else if / else statement",
        disc: `In C++, the 'if', 'else if', and 'else' statements form a powerful trio for handling different conditions. The 'if' statement tests a condition, and if that condition is true, the code block following the 'if' statement is executed. If the condition is false, the program moves on to the 'else if' statement, if one is present. The 'else if' statement tests a new condition, distinct from the 'if' statement's condition. This allows your program to handle multiple, specific scenarios, checking each 'else if' condition in order until one is found to be true or all have been found to be false. If all conditions in 'if' and 'else if' statements are false, and an 'else' statement is present, the code block following the 'else' statement is executed. Essentially, 'if' and 'else if' test specific conditions, while 'else' specifies a default behavior when no conditions are met.`,
        code:`
        if (operation == '+') {
            std::cout << "The result is: " << num1 + num2 << std::endl;
        } else if (operation == '-') {
            std::cout << "The result is: " << num1 - num2 << std::endl;
        } else if (operation == '*') {
            std::cout << "The result is: " << num1 * num2 << std::endl;
        } else if (operation == '/') {
            if(num2 != 0) {
                std::cout << "The result is: " << num1 / num2 << std::endl;
            } else {
                std::cout << "Error! Division by zero is not allowed." << std::endl;
            }
        } else {
            std::cout << "Error! Invalid operator." << std::endl;
        }
    `
    },

    {
        SlideNumber: 7,
        SlideTitle: "std:endl",
        disc: `In C++, the std::endl is an output manipulator used to insert a newline character into the output and flush the output buffer. It is commonly used with std::cout to end the current line and move the cursor to the start of the next line in the console. For instance, **std::cout << "Hello, World!" << std::endl;** would print the message "Hello, World!" to the console and then start a new line. This is especially useful when you want to separate different pieces of output, or when you want to ensure that subsequent output appears on a new line. <br> 
        
        You might be asking what the difference between **\n** and **std:endl** is. In C++, both **\n** and **std::endl** are used to insert a new line when displaying output to the console. You can use **\n** within a string that's being printed, like so: **std::cout << "Hello\nWorld";**. On the other hand, **std::endl** is typically used outside of strings and directly with the **std::cout** stream, like so: **std::cout << "Hello" << std::endl << "World";**. I wouldn't worry too much about this for now.`,
        code:`
        if (operation == '+') {
            std::cout << "The result is: " << num1 + num2 << std::endl;
        }`
    },
]
