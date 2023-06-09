export const Lesson6DataTitle = "Lesson 6: Guessing Game";

export const Lesson6Data = [
    {
        SlideNumber: 1,
        SlideTitle: "Guessing Game",
        disc: `We have reached our last project before I let you free in the wild! You have learned so much and I'm so excited to see what else you can create! This lesson will be about creating a guess game. Here are the parameters: <br> </br>

        The user competes against the the computer. The user starts with 4 lives and they guess a number from 1 to 10. The computer has a secret number that you are trying to guess. If you guess the number before your lives run out, you win! If not, the computer wins! Let's take a look at what you need to know to beat the computer!`,
        code:
`#include <iostream>
using namespace std;
#include <ctime>
#include <cstdlib>

int main() {
    srand(static_cast<unsigned int>(time(0)));  // Seed random number generator.

    int target = rand() % 10 + 1;  
        // Generate target number: a random integer between 1 and 10.
    int guess;  // Variable to hold user's guess.
    int lives = 4;  // User starts with 4 lives.

    cout << "Welcome to the Guess the Number game!\\n";
    cout << "Guess a number between 1 and 10.\\n";
    cout << "You have " << lives << " lives.\\n";

    while (lives > 0) {
        cout << "Enter your guess: ";
        cin >> guess;

        if (guess == target) {
            cout << "Correct, you win!\\n";
            return 0;  // End the game if the user guessed correctly.
        } else {
            --lives;  // Decrement the user's lives.
            if (lives > 0) {
                cout << "Sorry, " << guess << " was not the right number! 
                    Guess again!\\n";
                cout << "You have " << lives << " lives left.\\n";
            } else {
                cout << "Sorry, " << guess << " was not the right number
                     and you have run out of lives! Game Over!\\n";
                return 0;  // End the game if the user has run out of lives.
            }
        }
    }

    return 0;
}`
    },
    {
        SlideNumber: 2,
        SlideTitle: "Libraries: #include <ctime> and #include <cstdlib>",
        disc: `In C++, we use the #include directive to include other libraries in our programs. Libraries contain pre-written code that provides various functionalities, and including them allows us to use these functionalities in our programs. The <span class="style-html">&lt;ctime&gt;</span> library provides functions to get and manipulate date and time information. We will use this library to generate a seed for our random number generator. <br></br>
        
        The <span class="style-html">&lt;cstdlib&gt;</span> library, on the other hand, contains functions for general purpose tasks, such as dynamic memory management, random number generation, and others. We will use this library for its random number generation functionality. Don't worry about seeds or memory management, since they are outside of the scope of this application.`,
        code: 
`#include <iostream>
#include <ctime>
#include <cstdlib>
`,
    },
    {
        SlideNumber: 3,
        SlideTitle: " The srand Function",
        disc: `<span class="style-html">srand(static_cast<unsigned int>(time(0)));</span> is a line of code that sets the seed for the random number generator in C++. <span class="style-html">srand</span> stands for "seed random", and it is a function that takes an unsigned integer as an argument to set the seed. If you use the same seed every time, the sequence of random numbers generated will always be the same. 
        <br></br>
        
        To avoid this, we typically use the current time as the seed because it changes every second, making it a good source of pseudo-randomness. The <span class="style-html">time()</span> function returns the current time, and <span class="style-html">static_cast<unsigned int></span> is used to convert this time value to an unsigned integer, which is the type of data required by the <span class="style-html">srand</span> function.`,
        code:        
`srand(static_cast<unsigned int>(time(0)));`
    },
    {
        SlideNumber: 4,
        SlideTitle: " Generating Random Whole Numbers",
        disc: `To generate random numbers in C++, we use the <span class="style-html">rand()</span> function, which is part of the <span class="style-html">&lt;cstdlib&gt;</span> library. This function generates a pseudo-random number in the range of 0 to RAND_MAX, which is a large integer typically defined as 32767. To get a random number within a specific range, we use the modulus operator (<span class="style-html">%</span>).<br></br>
        
        <span class="style-html">rand() % 10</span> generates a random number between 0 and 9. But we want a number between 1 and 10 for our game, so we add 1 to the result: <br> <span class="style-html">rand() % 10 + 1</span>`,
        code:
`int target = rand() % 10 + 1; `
    },
    {
        SlideNumber: 5,
        SlideTitle: "While Loops",
        disc: `While loops in C++ are used to repeatedly execute a block of code as long as a condition is true. This is particularly useful when you don't know in advance how many times you need to repeat your code. In the syntax <span class="style-html">while (condition) { // code }</span>, the condition is checked before each iteration, and if the condition is false, the loop is exited and the program continues after the loop. In our number guessing game, we use a while loop to allow the user to keep guessing as long as they still have lives remaining.`,
        code:
`while (lives > 0) {
    /* The code in this block will continue to be executed 
        as long as the number saved to the variables 'lives'
        is GREATER than zero. */
    /* We can (and should be) preforming
         addition or subtraction on 'lives' in this block, 
        so lives will most likely not remain the same number */
}`
    },
    {
        SlideNumber: 6,
        SlideTitle: "Decrementing Variables",
        disc: `In C++, we can easily decrement, or decrease, the value of a variable using the <span class="style-html">--</span> operator. Placing <span class="style-html">--</span> after a variable name  decreases its value by 1. This is handy in our game for tracking the number of lives the user has left. Every time they make a wrong guess, we decrement the lives variable. <br></br>

        Something to note: <span class="style-html">--lives</span> and <span class="style-html">lives--</span> are essentially this same thing in this application, but mean two different things. <span class="style-html">lives--</span>, the post-decrement operator, decreases <span class="style-html">lives</span> by 1 <em>after</em> the current expression is evaluated, meaning it uses the original value of <span class="style-html">lives</span> for the current expression <em>before</em> the decrement happens. <br></br>
        
        On the other hand, <span class="style-html">--lives</span>, the pre-decrement operator, decreases <span class="style-html">lives</span> by 1 <em>before</em> the current expression is evaluated, meaning it uses the value of <span class="style-html">lives</span> <em>after</em> it's been decremented for the current expression. Again, in this application it doesn't matter, but it's something to be aware of!`,
        code:
`--lives`
    }
]
