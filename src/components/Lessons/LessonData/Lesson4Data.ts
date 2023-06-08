export const Lesson4DataTitle = "Mad Libs";

export const Lesson4Data = [
    {
        SlideNumber: 1,
        SlideTitle: "Mad Libs",
        disc: `Congratulations on Creating your first C++ program! As stated before, we will continue creating projects by adding new concepts as we go. This lesson will set us up with the information needed to create a Mad Libs project. The most important aspect of a developer is to know the steps needed to create a project, not necessarily how to do the steps themselves. <br></br>
        
        Knowing what needs to be done is a skill developed as you create more projects. This lesson will show you how to create the Mad Libs project, but it is sill up to you to try to put it together! Don't worry if this sounds difficult at first, I promise that it will get easier as we create more projects! Let's begin!
        `,
        code:

`#include <iostream>
#include <string>

int main() {
    std::string noun;
    std::string noun2;
    std::string verb;
    std::string adjective;
    std::string preposition;

    std::cout << "Welcome to C++ Mad Libs!\\n\\n";
    
    std::cout << "Enter a noun: ";
    std::getline(std::cin, noun);

    std::cout << "Enter a second noun: ";
    std::getline(std::cin, noun2);

    std::cout << "Enter a verb: ";
    std::getline(std::cin, verb);

    std::cout << "Enter an adjective: ";
    std::getline(std::cin, adjective);

    std::cout << "Enter a preposition: ";
    std::getline(std::cin, preposition);

    std::cout << "\\nHere's your story:\\n\\n";
    std::cout << "The " << adjective << " " << noun << " "
    << verb << " " << preposition << " the " << noun2 
    << ".\\n";
    
    return 0;
}
`
    },
    {
        SlideNumber: 2,
        SlideTitle: `New lines: "\\n"`,
        disc: `The <span class="style-html">\\n</span> is a special character in C++ and many other programming languages, known as an escape sequence. It stands for "newline" and is used to introduce a new line in the output of a program. When the compiler encounters <span class="style-html">\\n</span> within a string of text, it understands this as an instruction to move the cursor to the next line. This is particularly useful when formatting the output of your program, allowing you to organize information in a more readable or structured way. <br></br>
        
        For instance, if you were printing a list of items, you could use <span class="style-html">\\n</span> after each item to ensure they each appear on a separate line in the console. You can use two of them in a row to add an empty line as well!`,
        code: 
`std::cout << "Hello\\n\\nWorld!";
/*This would output the following:
Hello

World
*/`,
    },
    {
        SlideNumber: 3,
        SlideTitle: "Including Libraries with #include",
        disc: `At the top of our C++ file when we are using strings, you'll see the line <span class="style-html">#include</span>. This is a preprocessor directive that tells the compiler to include the  <span class="style-html">&lt;string&gt;</span> library before compiling the code. The <span class="style-html">&lt;string&gt;</span> library provides us with the  <span class="style-html">std::string</span> type, which we use to store and manipulate text. <br></br>
        
        Inclusion of libraries is a common practice in C++, and you'll often see multiple <span class="style-html">#include</span> statements at the top of a C++ program. Each of these brings in different functionalities that the program requires, such as input/output operations, mathematical functions, or, in this case, string handling abilities. Understanding which libraries to include is a fundamental part of learning and working with C++. Keep in mind that this library is needed only if you are taking user input in the form of a string.`,
        code: 
`#include <string>`,
    },
    {
        SlideNumber: 4,
        SlideTitle: "Basic Input and Output",
        disc: `C++ provides a simple way to display output and accept user input using the <span class="style-html">std::cout</span> and <span class="style-html">std::cin</span> objects, respectively. <span class="style-html">std::cout</span> allows your program to display messages or variable values to the console, while <span class="style-html">std::cin</span> captures user input. <br></br>
        
        For instance, <span class="style-html">std::cout << "Enter a noun: ";</span> prints a prompt for the user, and <span class="style-html">std::getline(std::cin, noun);</span> captures the user's response into the noun variable.`,
        code:
`std::cout << "Enter a name: "; 
std::cout << "Welcome to C++ Mad Libs!";`
    },

    {
        SlideNumber: 5,
        SlideTitle: "Using std::getline for Input",
        disc: `To accept a line of input, especially when dealing with strings that contain spaces, we use <span class="style-html">std::getline()</span>. This function reads an entire line from the input (until the user presses Enter), including any spaces. It's perfect for our Mad Libs project because it allows us to capture multi-word inputs from the user.`,
        code:
`std::getline(std::cin, name);`
    },

    {
        SlideNumber: 6,
        SlideTitle: "The Role of 'string'",
        disc: `In our Mad Libs program, we're going to use <span class="style-html">std::string</span> for storing the user's inputs. The <span class="style-html">std::string</span> type in C++ is used to store and manipulate sequences of characters, making it ideal for handling text input. It's part of the C++ Standard Library and includes a range of built-in methods for string manipulation.`,
        code:
`std::string name;
std::string hobby;
std::string last_name; 
// Notice that '_' is used for spaces in a variable name
}`
    },

    {
        SlideNumber: 7,
        SlideTitle: " Building a Simple User Interface",
        disc: `Creating an intuitive user interface is crucial, even in a console-based application like our Mad Libs project. We use <span class="style-html">std::cout</span> to display prompts to the user, guiding them on what type of word they should enter next. Each prompt is designed to request a specific type of word (a noun, verb, adjective, or preposition), and the user's input is then stored in the corresponding variable.`,
        code:
`std::cout << "Enter a noun: ";
std::getline(std::cin, noun);`
    },

    {
        SlideNumber: 8,
        SlideTitle: "String Concatenation",
        disc: `After capturing all user inputs, we want to stitch together a sentence or a paragraph. In C++, we can concatenate, or join, strings using the <span class="style-html">+</span> operator or simply by using the <span class="style-html"><<</span> operator with <span class="style-html">std::cout</span>. <br></br>
        
        For instance: <br></br><span class="style-html">The " << adjective << " " << noun << " " << verb << " " << preposition << " the " << noun2 << ".";</span> <br></br> This joins together the user's inputs into a complete sentence. It looks funky now, but it will look completely normal when the program is run!`,
        code:
`std::cout << "Here's your story:";
std::cout << "The " << adjective << " " << noun << " " 
<< verb << " " << preposition << " the " << noun2 
<< ".";`
    },
    {
        SlideNumber: 9,
        SlideTitle: "The Main Function",
        disc: `In C++, every program must have a <span class="style-html">main()</span> function. This is the entry point of the program, the place where execution begins. Our <span class="style-html">main()</span> function contains all of our program's logic, from declaring variables, capturing user input, and finally outputting the completed Mad Libs story.`,
        code:
`int main() {
    // Code goes here!
}`
    },
]
