export const Challenge5Data = [
    {
        title:`Build a Calculator`,
        desc1: `Alright, now let's take it up a notch! Your task is to create a calculator that takes two numbers and an operator (+, -, *, /) and prints out the solution to the screen. Like before I will give you a bit of starter code, but your will have to fill in more than last time! Good luck!`,
        code: `
        // ADD CODE: We are not working with strings, but we still need to 'include' something here!

        // Initiate the function that contains the application
            int num1, num2;
            char operation;

            std::cout << "Enter first number: ";
            // ADD CODE: Finish capturing the first number

            std::cout << "Enter an operator (+, -, *, /): ";
            // ADD CODE: save the operation to the variable 'operation

            //ADD CODE: Get a second number from the user and capture it as well. HINT: This will be two lines of code!

            if (operation == '+') {
                std::cout << "The result is: " << num1 + num2 << std::endl;
            } else if (operation == '-') {
                // ADD CODE: If the operation is '-', but tract the two numbers
            // ADD CODE: Add an 'else if' condition that checks if the operation is a '*'
                std::cout << "The result is: " << num1 * num2 << std::endl;
            } else if (operation == '/') {
                // ADD CODE: add a contitional check to see if num1 != 0
                    std::cout << "The result is: " << num1 / num2 << std::endl;
                } else {
                    ADD CODE: Print a message to the user saying that division by 0 is not allowed
                }
            } else {
                std::cout << "Error! Invalid operator." << std::endl;
            }

            // ADD CODE: Can you remember what we need to add at the end of a function?
        }`,
        desc2: `I hope this project was challenging, but not impossible! Syntax is huge in C++, and that will come time time! <br> 
        Extra Credit: Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! `,
        solution: `
        #include <iostream>

        int main() {
            int num1, num2;
            char operation;

            std::cout << "Enter first number: ";
            std::cin >> num1;

            std::cout << "Enter an operator (+, -, *, /): ";
            std::cin >> operation;

            std::cout << "Enter second number: ";
            std::cin >> num2;

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

            return 0;
        }
        `
    }
];