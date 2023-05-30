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
        SlideTitle: "Else statement",
        disc: `In C++, the 'else' statement is used in conjunction with an 'if' statement to define a block of code to be executed if the condition in the 'if' statement is false. Basically, 'if' tests a condition and 'else' specifies what should happen when that condition is not met. It acts as a fallback or default behavior when the 'if' condition fails.`,
        code:`
        std::cout << "Enter first number: ";
        std::cin >> num1; // User enters 0

        // Num1 is 0

        if(num2 > 1) {
            std::cout << "Yes, num1 is in fact greater than 1"; 
        } else {
            std::cout << "No, num1 is not in fact greater than 1"; // This line would execute, since 0 is not greater than 1
        }`
    },

    {
        SlideNumber: 7,
        SlideTitle: "String Concatenation",
        disc: `After capturing all user inputs, we want to stitch together a sentence or a paragraph. In C++, we can concatenate, or join, strings using the + operator or simply by using the << operator with **std::cout**. For instance, **"The " << adjective << " " << noun << " " << verb << " " << preposition << " the " << noun2 << ".\n";** joins together the user's inputs into a complete sentence. It looks funky now, but it will look completely normal when the program is run!`,
        code:`
        std::cout << "\nHere's your story:\n\n";
        std::cout << "The " << adjective << " " << noun << " " << verb << " " << preposition << " the " << noun2 << ".\n";    
        }`
    },

    {
        SlideNumber: 8,
        SlideTitle: "Formatting and Styling Output",
        disc: `Neatly formatting our output helps make it more readable. Notice how we've used \n (newline) characters in our output strings? These help to break up the output, putting different sections on separate lines in the console. \n is an example of an escape sequence, a series of characters that represents a special command.`,
        code:`
        std::cout << "\nHere's your story:\n\n";
        std::cout << "The " << adjective << " " << noun << " " << verb << " " << preposition << " the " << noun2 << ".\n";    
        }`
    },

    {
        SlideNumber: 9,
        SlideTitle: "The Main Function",
        disc: `In C++, every program must have a main() function. This is the entry point of the program, the place where execution begins. Our **main()** function contains all of our program's logic, from declaring variables, capturing user input, and finally outputting the completed Mad Libs story.`,
        code:`
        int main() {
        // Code goes here!
        }`
    },
]
