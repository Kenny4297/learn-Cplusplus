export const Lesson3DataTitle = "Lesson 3: Hello, World!";

export const Lesson3Data = [
    {
        SlideNumber: 1,
        SlideTitle: "'Hello, World!'",
        disc: `Now that you have everything installed, it's time to write your first program! We will be writing a program that will be printing out 'Hello, World!' to the terminal. <br></br>

        Take a look at the code below. What do you notice? Is there anything different about it compared to the code the previous video had you copy and paste? What's the same? In the following lesson you will learn what each line of code does. Let's begin!
        `,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 2,
        SlideTitle: "#include <iostream>",
        disc: `This line is a <span class="style-html">processor directive</span>, more specifically an include directive in C++. It tells the preprocessor to include the <span class="style-html">iostream</span> standard file. The <span class="style-html">iostream</span> standard file allows input and output in a C++ program. This means that it helps the program to interact with the user by taking input from the user and outputting results or data to the user.
        `,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 3,
        SlideTitle: "using namespace std;",
        disc: `Namespaces in C++ are designed to encapsulate identifiers such as class names, functions, and variables to avoid naming collisions. These collisions can occur when two or more identifiers have the same name and could potentially interfere with each other during compilation or runtime. The <span class="style-html">std</span> namespace, which stands for standard, is the namespace that contains all the identifiers provided by the C++ Standard Library. <br></br>

        The phrase <span class="style-html">using namespace std;</span> is a directive to the compiler. It tells the compiler to assume that we're going to be using things that are in the std namespace without specifically prefixing them with <span class="style-html">std::</span>. This means we can write <span class="style-html">cout</span> instead of <span class="style-html">std::cout</span>, <span class="style-html">cin</span> instead of <span class="style-html">std::cin</span>, and so on, which can make the code cleaner and easier to read.
        `,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 2,
        SlideTitle: "int main() {}",
        disc: `This line declares the main function. Every C++ program has a main function which is the starting point of program execution. The <span class="style-html">int</span> before <span class="style-html">main</span> signifies that this function will return an integer.`,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 3,
        SlideTitle: "Functions pt 1",
        disc: `A parameter, in the context of functions, is a variable that is used to pass information between functions. When defining a function, we specify its parameters in the function header. This gives the function the information it needs to perform its task. <br></br>
        
        Parameters act as placeholders that get replaced with actual values, called arguments, when the function is called. Calling a function is the process of executing the set of statements defined inside the function. When we call a function, we use the function's name followed by parentheses. <br></br>
        
        If the function requires parameters, we include the arguments (the actual values) within these parentheses. When a function is called, the execution of the program shifts to the body of the called function. The compiler starts executing the codes within the function. Once all the lines of code in the function have run, execution continues from the point where the function was originally called in the program.`,
        code:
`/* The following function takes in two integers 
and returns their sum: */

#include <iostream>
using namespace std;

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
}

//'add' and 'main' are both functions
`
    },
    {
        SlideNumber: 4,
        SlideTitle: "Functions pt 2",
        disc: `You are probably asking the following: "If we defined main as an integer (the int before the <span class="style-html">main</span> function name), and we return 0 at the end of the code, why does the function return a string? (<span class="style-html">cout << "The sum is: " << sum << endl;</span>) <br> </br>
        
        The <span class="style-html">main</span> function in this code does not return a string. The <span class="style-html">main</span> function is supposed to return an integer (as indicated by int before <span class="style-html">main</span>), and it does indeed return an integer in the code, specifically, it returns <span class="style-html">0</span>. <br> </br>

        When you see <span class="style-html">cout << "The sum is: " << sum << endl;</span>, it may look like <span class="style-html">main</span> is returning a string because this line is printing a string to the console. However, this operation doesn't change the return value of <span class="style-html">main</span>. This line of code just sends output to the console, and it doesn't affect the <span class="style-html">return 0;</span> line that comes after it. <br></br>
        
        The <span class="style-html">return 0;</span> statement is used to indicate that the program has run successfully. In C++, a return value of <span class="style-html">0</span> from the <span class="style-html">main</span> function is a universal indicator that the program has ended successfully. If the program were to return a non-zero value, that typically indicates an error or abnormal termination.<br></br>
        
        In the code, <span class="style-html">"The sum is: "</span> is a string that gets printed to the console, and <span class="style-html">sum</span> is an integer that also gets printed to the console. But neither of these affect the return value of <span class="style-html">main</span>, which is <span class="style-html">0</span>. <br></br>

        We highly recommend playing around with this code in your terminal. Delete stuff, and if you are feeling confident, create another function that subtracts two numbers and add that to the output!.`,
        code:
`/* The following function takes in two integers 
and returns their sum: */

#include <iostream>
using namespace std;

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
}

//'add' and 'main' are both functions
`
    },
    {
        SlideNumber: 5,
        SlideTitle: "Braces ({ })",
        disc: `This is the opening brace for the main function. Everything between this brace and its corresponding closing brace is the body of the main function. All the code that the program executes will be inside these braces.`,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 5,
        SlideTitle: "cout << 'Hello, World!'",
        disc: `This line does a few things. Firstly, it uses <span class="style-html">cout</span> which is the standard character output device. It corresponds to the standard output stream in your system (typically, this will be your terminal or screen). The <span class="style-html"><<</span> operator is a stream insertion operator and it inserts what's on its right (in this case, <span class="style-html">"Hello, World!"</span>) into what's on its left (in this case, the standard output stream).`,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 6,
        SlideTitle: "'Hello, World!'",
        disc: `This is a string literal. In C++, a string literal is a sequence of characters enclosed in double quotation marks. The characters in a string can be letters, digits, escape sequences, etc. Here, the string <span class="style-html">"Hello, World!"</span> is outputted to the screen when this line of code is executed.`,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 7,
        SlideTitle: "Semi-colon (;)",
        disc: `The semicolon is a statement terminator. That means it marks the end of one logical statement. Here, it signifies the end of the output statement which prints <span class="style-html">"Hello, World!"</span> to the standard output.`,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
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
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 9,
        SlideTitle: "}",
        disc: `This is the closing brace for the main function. Just like before It signifies the end of the function. `,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
    {
        SlideNumber: 10,
        SlideTitle: "Your first program!",
        disc: `In summary, this small piece of C++ code includes the iostream file, sets up a main function, and prints <span class="style-html">"Hello, World!"</span> to the screen. The program then ends by returning an exit status of 0, indicating that it has run successfully. The program is a simple example of a console program in C++, and it's often the very first program that beginners in C++ (or any programming language) will learn to write and understand. <br> <br> Try doing this again in your terminal! Understanding the flow and the syntax is the most important take away at this stage. Don't forget those pesky <span class="style-html">;'s</span> !`,
        code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`
    },
]
