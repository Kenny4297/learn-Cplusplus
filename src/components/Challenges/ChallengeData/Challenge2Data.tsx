export interface ChallengeSlideInterface {
    title: string;
    desc1: string;
    code: string;
    desc2: string;
    solution?: string;
}

export const Challenge2Data = [
    {
        title:`Testing our Set Up`,
        desc1: `Now that we have everything set up, let's make sure we can run our programs! Copy and past the code below into VSCode:`,
        code: `
        #include <iostream>
        
        int main() {
            std::cout << "Hello, World!";
            return 0;
        }`,
        desc2: `Then in your terminal, run the code. You should see 'Hello World' outputted to the terminal! (if you did not you may need to become a developer for a moment and troubleshoot!). Don't worry about what all of this means, we will go through this in the next lesson. <br> 
        Extra Credit: Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! `,
        solution: ""
    }
];