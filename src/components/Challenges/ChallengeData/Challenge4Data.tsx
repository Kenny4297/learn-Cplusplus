export const Challenge4Data = [
    {
        title:`Creating your very own Mad Libs!`,
        desc1: `Let's build our very own mad libs project! Since this is your first complex project, I will be giving you some starter code, and you will add in the missing sections as shown in the code below. Copy and paste this code into VSCode, and fill in the missing lines!`,
        code: `
        #include <iostream>
        // ADD CODE: What do we need to add to allow strings from user input?
        
        int main() {
            std::string noun;
            std::string noun2;
            // ADD CODE: Let's create a verb variable to store the verb from the user.
            std::string adjective;
            std::string preposition;
        
            std::cout << "Welcome to C++ Mad Libs!\n\n";
            
            std::cout << "Enter a noun: ";
            std::getline(std::cin, noun);
        
            // ADD CODE: Out put a message asking the user to enter a noun
            std::getline(std::cin, noun2);
        
            std::cout << "Enter a verb: ";
            std::getline(std::cin, verb);
        
            std::cout << "Enter an adjective: ";
            // ADD CODE: Let's finish capturing the users adjective
        
            // ADD CODE: Display a message to have the user enter a preposition
            // ADD CODE: Finish capturing the users adjective
        
            std::cout << "\nHere's your story:\n\n";
            std::cout << "The " << adjective << " " << noun << " " << verb << " " << preposition << " the " << noun2 << ".\n";
            
            // ADD CODE: What can we 'return' to make sure the program has successfully completed execution without any errors?
        }
        `,
        desc2: `Try running the program in your terminal! Good luck! Remember to troubleshoot your issues with Google or AI! Only check the solution when you have figured it out, or if AI or Google were not able to help!`,
        solution: `
        #include <iostream>
        #include <string>

        int main() {
            std::string noun;
            std::string noun2;
            std::string verb;
            std::string adjective;
            std::string preposition;

            std::cout << "Welcome to C++ Mad Libs!\n\n";
            
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

            std::cout << "\nHere's your story:\n\n";
            std::cout << "The " << adjective << " " << noun << " " << verb << " " << preposition << " the " << noun2 << ".\n";
            
            return 0;
        }
        `
    }
];