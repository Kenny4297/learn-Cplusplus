export const Challenge6Data = [
    {
        title:`Guessing Game`,
        desc1: `This will be the most difficult project you have ever completed, since you will need to do something you never had to do before: Think like a programmer! I will be giving you some starter code and some hints, but it will be up to do you put this all together. You may want to go back through the lessons and review some of the syntax and ideas. Here is some code that you may want to use in the project:\n
\`<ctime>\`\n
\`<cstdlib>\`\n
\`srand(static_cast<unsigned int>(time(0)));\`\n
\`int target = rand() % 10 + 1;\` <br /><br />
Hints:\n
You WILL find yourself struggling using conditionals inside the while loop. Keep in mind that you CAN have a conditional inside of another conditional...\n
First check to see if you have won, THEN execute the correct code if you haven't won the game yet.\n
Don't forget to close your "{}"!\n
Remember: struggling is completely normal in the life of a programmer. Learn to love the struggle!\n\n
I leave you with nothing else. Try your best, and remember to use Google and AI for assistance!`,




        desc2: `Knowing what to do and when is the absolute key to programming. You have so many tools at your disposal, but knowing when to use them is what programming is all about.`,
        solution: `#include <iostream>
        #include <ctime>
        #include <cstdlib>
        
        int main() {
            srand(static_cast<unsigned int>(time(0)));  // Seed random number generator.
        
            int target = rand() % 10 + 1;  // Generate target number: a random integer between 1 and 10.
            int guess;  // Variable to hold user's guess.
            int lives = 4;  // User starts with 4 lives.
        
            std::cout << "Welcome to the Guess the Number game!\n";
            std::cout << "Guess a number between 1 and 10.\n";
            std::cout << "You have " << lives << " lives.\n";
        
            while (lives > 0) {
                std::cout << "Enter your guess: ";
                std::cin >> guess;
        
                if (guess == target) {
                    std::cout << "Correct, you win!\n";
                    return 0;  // End the game if the user guessed correctly.
                } else {
                    --lives;  // Decrement the user's lives.
                    if (lives > 0) {
                        std::cout << "Sorry, " << guess << " was not the right number! Guess again!\n";
                        std::cout << "You have " << lives << " lives left.\n";
                    } else {
                        std::cout << "Sorry, " << guess << " was not the right number and you have run out of lives! Game Over!\n";
                        return 0;  // End the game if the user has run out of lives.
                    }
                }
            }
        
            return 0;
        }
        `
    }
];