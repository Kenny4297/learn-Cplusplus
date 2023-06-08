export const Lesson5DataTitle = "Lesson 5: Calculator";

export const Lesson5Data = [
    {
        SlideNumber: 1,
        SlideTitle: "Build a Calculator",
        disc: `In this project, we will be building a calculator that will be able to perform simple mathematical functions. As in any programming language, we will be using the fundamentals that we have learned and building on top of them. Feel free to visit the previous lessons to get a better understanding of the concepts discussed, since moving forward without being somewhat comfortable is dangerous!
        `,
        code: `
#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    char operation;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter an operator (+, -, *, /): ";
    cin >> operation;

    cout << "Enter second number: ";
    cin >> num2;

    if (operation == '+') {
        cout << "The result is: " << num1 + num2 << endl;
    } else if (operation == '-') {
        cout << "The result is: " << num1 - num2 << endl;
    } else if (operation == '*') {
        cout << "The result is: " << num1 * num2 << endl;
    } else if (operation == '/') {
        if(num2 != 0){
            cout << "The result is: " << num1 / num2 << endl;
        } else {
            cout << "Error! Division by zero is not allowed." << endl;
        }
    } else {
        cout << "Error! Invalid operator." << endl;
    }

    return 0;
}`
    },
    {
        SlideNumber: 2,
        SlideTitle: "Integer Variable",
        disc: `Variables in C++ are named entities that can store data. They have a type that determines what kind of data they can hold. In our calculator, we will be using integer variables <span class="style-html">int num1, num2</span> to store the numbers for our calculations, and a character variable (<span class="style-html">char operation</span>) to store the operator.`,
        code: 
`int num1, num2;
char operation;`,
    },
    {
        SlideNumber: 3,
        SlideTitle: "User Input",
        disc: ` To accept user input, we use the <span class="style-html">cin</span> object. When you use <span class="style-html">cin >> (variable-name-here);</span>, it waits for the user to enter something and then stores the input into the specified variable. We will use this in our calculator program to capture the numbers and the operation that the user wants to perform. This is EXACTLY what we did in the previous project. I just thought a refresher would be nice!`,
        code:
`cout << "Enter first number: ";
cin >> num1;`
    },
    {
        SlideNumber: 4,
        SlideTitle: "Conditional Statements",
        disc: `Conditional statements (<span class="style-html">if</span> statements) in C++ allow the program to perform different actions based on whether a certain condition is true or false. In our calculator, we will use an if statement to check if the user is trying to divide by zero, which is not allowed in mathematics. <br></br>
        
        In the following code, we start the <span class="style-html">if</span> statement with an '<span class="style-html">if</span>'. We are saying that "if what ever is in the '()' is true, the code in the '{}' will execute". More specifically, we are saying "If the number that was stored in <span class="style-html">num2</span> does not equal zero, we will print the result to the terminal". More on the '<span class="style-html">!=</span>' next! `,
        code:
`if(num2 != 0) {
    cout << "The result is: " << num1 / num2 << endl;
}`
    },
    {
        SlideNumber: 5,
        SlideTitle: "Operators",
        disc: `Operators in C++ are symbols used to perform operations on values and variables. Here's a simplified list of basic operators: <br></br>
        <span class="style-html">Arithmetic:</span> Addition (<span class="style-html">+</span>), Subtraction (<span class="style-html">-</span>), Multiplication (<span class="style-html">*</span>) and Division (<span class="style-html">/</span>). <br></br>
        
        <span class="style-html">Comparisons:</span> Equals to (<span class="style-html">==</span>), Not equal to (<span class="style-html">!=</span>), Greater than (<span class="style-html">></span>), Less than (<span class="style-html"><</span>), Greater than or equal to (<span class="style-html">>=</span>), Less than or equal to (<span class="style-html"><=</span>). <br></br>
        <span class="style-html">Logical:</span> These are a bit complex and will not be used in this application. Just knowing there is more than what is listed here is fine at this point! <br>`,
        code:
`cout << "Enter first number: ";
cin >> num1; // User enters 5

// Num1 is 5

if(num2 > 1) {
    cout << "Yes, num1 is in fact greater than 1"; 
    //This line would execute, since 5 is greater than 1
} else {
    cout << "No, num1 is not in fact greater than 1";
}`
    },
    {
        SlideNumber: 6,
        SlideTitle: "else if / else statement",
        disc: `In C++, the <span class="style-html">if</span>, <span class="style-html">else if</span>, and <span class="style-html">else</span> statements form a powerful trio for handling different conditions. The <span class="style-html">if</span> statement tests a condition, and if that condition is true, the code block following the <span class="style-html">if</span> statement is executed. If the condition is false, the program moves on to the <span class="style-html">else if</span> statement, if one is present. <br></br>
        
        
        The <span class="style-html">else if</span> statement tests a new condition, distinct from the <span class="style-html">if</span> statement's condition. This allows your program to handle multiple, specific scenarios, checking each <span class="style-html">else if</span> condition in order until one is found to be true or all have been found to be false. If all conditions in <span class="style-html">if</span> and <span class="style-html">else if</span> statements are false, and an <span class="style-html">else</span> statement is present, the code block following the <span class="style-html">else</span> statement is executed. <br></br>
        
        Essentially, <span class="style-html">if</span> and <span class="style-html">else if</span> test specific conditions, while <span class="style-html">else</span> specifies a default behavior when no conditions are met.`,
        code:
`if (operation == '+') {
    cout << "The result is: " << num1 + num2 << endl;
} else if (operation == '-') {
    cout << "The result is: " << num1 - num2 << endl;
} else if (operation == '*') {
    cout << "The result is: " << num1 * num2 << endl;
} else if (operation == '/') {
    if(num2 != 0) {
        cout << "The result is: " << num1 / num2 << endl;
    } else {
        cout << "Error! 
        Division by zero is not allowed." << endl;
    }
} else {
    cout << "Error! Invalid operator." << endl;
}
`
    },
    {
        SlideNumber: 7,
        SlideTitle: "endl",
        disc: `In C++, the <span class="style-html">endl</span> is an output manipulator used to insert a newline character into the output and flush the output buffer. It is commonly used with <span class="style-html">cout</span> to end the current line and move the cursor to the start of the next line in the console. For instance, <br></br> <span class="style-html">cout << "Hello, World!" << endl;</span> <br></br> would print the message <span class="style-html">Hello, World!</span> to the console and then start a new line. This is especially useful when you want to separate different pieces of output, or when you want to ensure that subsequent output appears on a new line. <br></br>
        
        You might be asking what the difference between <span class="style-html">\\n</span> and <span class="style-html">endl</span> is. In C++, both <span class="style-html">\\n</span> and <span class="style-html">endl</span> are used to insert a new line when displaying output to the console. You can use<span class="style-html">\\n</span> within a string that's being printed. On the other hand, <span class="style-html">endl</span> is typically used outside of strings and directly with the <span class="style-html">cout</span> stream, like so: <br></br> <span class="style-html">cout << "Hello" << endl << "World";</span> <br></br> I wouldn't worry too much about this for now.`,
        code:
`if (operation == '+') {
    cout << "The result is: " << num1 + num2 << endl;
}`
    }
]
