export const Lesson3DataTitle = "Lesson 3: Hello, World!";

export const Lesson3Data = [
    {
        SlideNumber: 1,
        SlideTitle: "#include <iostream>",
        disc: `This line is a <span class="style-html">processor directive</span>, more specifically an include directive in C++. It tells the preprocessor to include the <span class="style-html">iostream</span> standard file. The <span class="style-html">iostream</span> standard file allows input and output in a C++ program. This means that it helps the program to interact with the user by taking input from the user and outputting results or data to the user.
        `,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 2,
        SlideTitle: "int main() {}",
        disc: `This line declares the main function. Every C++ program has a main function which is the starting point of program execution. The <span class="style-html">int</span> before <span class="style-html">main</span> signifies that this function will return an integer.`,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 3,
        SlideTitle: "Functions",
        disc: `A parameter, in the context of functions, is a variable that is used to pass information between functions. When defining a function, we specify its parameters in the function header. This gives the function the information it needs to perform its task. <br></br>
        
        Parameters act as placeholders that get replaced with actual values, called arguments, when the function is called. Calling a function is the process of executing the set of statements defined inside the function. When we call a function, we use the function's name followed by parentheses. <br></br>
        
        If the function requires parameters, we include the arguments (the actual values) within these parentheses. When a function is called, the execution of the program shifts to the body of the called function. The compiler starts executing the codes within the function. Once all the lines of code in the function have run, execution continues from the point where the function was originally called in the program.`,
        code:
`/* The following function takes in two integers 
and returns their sum: */

int add(int a, int b) { // int a and int b are parameters
    return a + b; /* This is what the function does
    each time it is called */
}

int main() {
    // calling the function
    int sum = add(5, 7); /* '5' and '7' are arguments. 
    Note that we are setting the function to a variable! */

    cout << "The sum is: " << sum << endl; 
    // printing the function to the screen

    return 0;
}`
    },
    {
        SlideNumber: 4,
        SlideTitle: "Braces ({ })",
        disc: `This is the opening brace for the main function. Everything between this brace and its corresponding closing brace is the body of the main function. All the code that the program executes will be inside these braces.`,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 5,
        SlideTitle: "std::cout << 'Hello, World!'",
        disc: `This line does a few things. Firstly, it uses <span class="style-html">std::cout</span> which is the standard character output device. It corresponds to the standard output stream in your system (typically, this will be your terminal or screen). The <span class="style-html"><<</span> operator is a stream insertion operator and it inserts what's on its right (in this case, <span class="style-html">"Hello, World!"</span>) into what's on its left (in this case, the standard output stream).`,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 6,
        SlideTitle: "'Hello, World!'",
        disc: `This is a string literal. In C++, a string literal is a sequence of characters enclosed in double quotation marks. The characters in a string can be letters, digits, escape sequences, etc. Here, the string <span class="style-html">"Hello, World!"</span> is outputted to the screen when this line of code is executed.`,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 7,
        SlideTitle: "Semi-colon (;)",
        disc: `The semicolon is a statement terminator. That means it marks the end of one logical statement. Here, it signifies the end of the output statement which prints <span class="style-html">"Hello, World!"</span> to the standard output.`,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 8,
        SlideTitle: "return 0;",
        disc: `This line is the termination statement of the main function. The <span class="style-html">return</span> keyword causes the main function to finish. The value that follows return (in this case, <span class="style-html">0</span>) is the exit status of the program. In C++, returning 0 from the main function indicates that the program executed successfully. It's a common practice to use <span class="style-html">return 0</span> at the end of the main function. <br></br>
        
        Notice how we also add the <span class="style-html">;</span> here again. Just like before It signifies the end of the function. Get into the habit of placing these at the end of pretty much everything. `,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 9,
        SlideTitle: "}",
        disc: `This is the closing brace for the main function. Just like before It signifies the end of the function. `,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 10,
        SlideTitle: "Your first program!",
        disc: `In summary, this small piece of C++ code includes the iostream file, sets up a main function, and prints <span class="style-html">"Hello, World!"</span> to the screen. The program then ends by returning an exit status of 0, indicating that it has run successfully. The program is a simple example of a console program in C++, and it's often the very first program that beginners in C++ (or any programming language) will learn to write and understand. <br> <br> Try doing this again in your terminal! Understanding the flow and the syntax is the most important take away at this stage. Don't forget those pesky <span class="style-html">;'s</span> !`,
        code:
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`
    },
]
