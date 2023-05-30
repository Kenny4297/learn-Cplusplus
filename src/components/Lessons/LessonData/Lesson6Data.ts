export const Lesson6DataTitle = "Guessing Game";

export const Lesson6Data = [
    {
        SlideNumber: 1,
        SlideTitle: "Guessing Game",
        disc: `We have reached our last project before I let you free in the wild! You have learned so much and I'm so excited to see what else you can create! This lesson will be about creating a guess game. Here are the parameters: <br> 
        The user competes against the bug machine, I mean the computer. The user starts with 4 lives and they guess a number from 1 to 10. The computer has a secret number that you are trying to guess. If you guess the number before your lives run out, you win! If not, the computer wins! Let's take a look at what you need to know to beat the computer!
        `,
    },
    {
        SlideNumber: 2,
        SlideTitle: "Libraries: **#include <ctime>** and **#include <cstdlib>**",
        disc: `In C++, we use the #include directive to include other libraries in our programs. Libraries contain pre-written code that provides various functionalities, and including them allows us to use these functionalities in our programs. The **<ctime>** library provides functions to get and manipulate date and time information. We will use this library to generate a seed for our random number generator. The **<cstdlib>** library, on the other hand, contains functions for general purpose tasks, such as dynamic memory management, random number generation, and others. We will use this library for its random number generation functionality. Don't worry about seeds or memory management, since they are outside of the scope of this application.`,
        code: `
        #include <iostream>
        #include <ctime>
        #include <cstdlib>
        `,
    },
    {
        SlideNumber: 3,
        SlideTitle: " The **srand** Function",
        disc: `**srand(static_cast<unsigned int>(time(0)));** is a line of code that sets the seed for the random number generator in C++. **srand** stands for "seed random", and it is a function that takes an unsigned integer as an argument to set the seed. If you use the same seed every time, the sequence of random numbers generated will always be the same. To avoid this, we typically use the current time as the seed because it changes every second, making it a good source of pseudo-randomness. The **time(0)** function returns the current time, and **static_cast<unsigned int>** is used to convert this time value to an unsigned integer, which is the type of data required by the **srand** function.`,
        code:`        
        srand(static_cast<unsigned int>(time(0)));  
        `
    },

    {
        SlideNumber: 4,
        SlideTitle: " Generating Random Whole Numbers",
        disc: `To generate random numbers in C++, we use the **rand()** function, which is part of the **<cstdlib>** library. This function generates a pseudo-random number in the range of 0 to RAND_MAX, which is a large integer typically defined as 32767. To get a random number within a specific range, we use the [modulus operator](https://stackoverflow.com/questions/17524673/understanding-the-modulus-operator) (%). **rand() % 10** generates a random number between 0 and 9. But we want a number between 1 and 10 for our game, so we add 1 to the result: **rand() % 10 + 1.**`,
        code:`
        int target = rand() % 10 + 1; 
        `
    },

    {
        SlideNumber: 5,
        SlideTitle: "While Loops",
        disc: `While loops in C++ are used to repeatedly execute a block of code as long as a condition is true. This is particularly useful when you don't know in advance how many times you need to repeat your code. In the syntax **while (condition) { // code }**, the condition is checked before each iteration, and if the condition is false, the loop is exited and the program continues after the loop. In our number guessing game, we use a while loop to allow the user to keep guessing as long as they still have lives remaining.`,
        code:`
        while (lives > 0) {
            // The code in this block will continue to be executed as long as the number saved to the variables 'lives' is GREATER than zero.
            // We can (and should be) preforming addition or subtraction on 'lives' in this block, so lives will most likely not remain the same number
        }
        `
    },

    {
        SlideNumber: 6,
        SlideTitle: "Decrementing Variables",
        disc: `In C++, we can easily decrement, or decrease, the value of a variable using the **--** operator. Placing **--** after a variable name  decreases its value by 1. This is handy in our game for tracking the number of lives the user has left. Every time they make a wrong guess, we decrement the lives variable.`,
        code:`
        lives--
        `
    }
]
