export const Lesson7DataTitle = "Next Steps";

export const Lesson7Data = [
    {
        SlideNumber: 1,
        SlideTitle: "Next Steps",
        // img : Olu,
        disc : `You did it! You passed the course! You are not familiar with the bare-bone basics of C++! Although there are more basics to learn, they will not be covered in this course. This final lesson will give brief examples of the topics to study next, but will not contain a challenge. If you enjoyed struggling at this point, C++ might be for you! If not, that's ok too.`,
    },
    {
        SlideNumber: 2,
        SlideTitle: "Arrays and Vectors",
        // img : Olu,
        disc : `An array is a fixed-size collection of elements of the same type, while a vector, part of the Standard Template Library (STL), is a dynamic-size collection, which can grow or shrink as needed. The key difference lies in their flexibility: arrays are static and their size must be determined at compile-time, whereas vectors are dynamic, allowing for size adjustments during runtime. In the following example, myArray has a fixed size of 3. In contrast, myVector can have elements added or removed dynamically.`,
        code:
`// Array of integers
int myArray[3] = {1, 2, 3};

// Vector of integers
#include <vector>
std::vector<int> myVector = {1, 2, 3};
`
    },
    {
        SlideNumber: 3,
        SlideTitle: "Pointers",
        // img : Olu,
        disc : `Pointers are a powerful feature that allow programmers to directly manipulate memory. A pointer is essentially a variable that holds the memory address of another variable. This means that instead of holding a specific value, like an integer or a character, a pointer holds the location in memory of where that value can be found. This enables efficient manipulation of arrays and data structures, direct access to hardware, and the creation of complex data structures such as linked lists and binary trees. Despite their potential complexity and risk of misuse, pointers are fundamental to efficient C++ programming. In the following example, x is a normal integer variable, and ptr is a pointer to an integer. We use the address-of operator & to get the address of x, and assign it to ptr. The * operator is used to dereference the pointer, i.e., to access the value that the pointer points to. So *ptr gives us the value of x.`,
        code:
`#include<iostream>
using namespace std;

int main() {
    int x = 10; // Declare a normal variable

    int* ptr = &x; /* Declare a pointer variable
     and assign it the address of x */

    cout << "Value of x: " << x << endl; 
        // Outputs: Value of x: 10
    cout << "Address of x: " << &x << endl; 
        // Outputs: Address of x: 0x7ffcc89ae8ac 
            (Note: This value will vary)
    cout << "Value of ptr: " << ptr << endl; 
        // Outputs: Value of ptr: 0x7ffcc89ae8ac
    cout << "Value of *ptr: " << *ptr << endl; 
        // Outputs: Value of *ptr: 10

    return 0;
}`,
    },
    {
        SlideNumber: 4,
        SlideTitle: "References",
        // img : Olu,
        disc : `A reference is a type of alias or nickname for an existing variable. A reference is declared using the ampersand (&) operator and must be initialized to a variable when it is declared. The reference will then remain as an alias for that variable for its entire lifetime. It's important to note that a reference is just another name for an already existing variable, it's not a new variable itself. In the following example, ref is a reference to x. Any changes made to ref will reflect in x, because ref is just another name for x`,
        code:
`#include<iostream>
using namespace std;

int main() {
    int x = 10; // a normal integer
    int& ref = x; // a reference to x

    cout << "x: " << x << endl; // Outputs: x: 10
    cout << "ref: " << ref << endl; // Outputs: ref: 10

    ref = 20; // change the value of x through the reference
    cout << "x: " << x << endl; // Outputs: x: 20
    cout << "ref: " << ref << endl; // Outputs: ref: 20

    return 0;
}`
    },
    {
        SlideNumber: 5,
        SlideTitle: "Classes",
        // img : Olu,
        disc : `A class is a user-defined data type that encapsulates related properties and behaviors. It's like a blueprint for creating objects. Classes often model real-world things, such as a dog in this case, with attributes (member variables) like a name, and behaviors (member functions or methods) like barking. In the following code, Dog is a class with an attribute name and a method bark(). The object myDog is an instance of Dog and we assign "Fido" to the name attribute and then use the bark() method.`,
        code: 
`#include<iostream>
using namespace std;

// Define a class
class Dog {
    public:  // Access specifier
        string name;  // Attribute

        // Method
        void bark() {
            cout << name << " says woof!" << endl;
        }
};`
    },
    {
        SlideNumber: 6,
        SlideTitle: "Objects",
        // img : Olu,
        disc : ` An object is an instance of a class. A class is a blueprint for creating objects, providing initial values for state (member variables), and defining behaviors (member functions or methods). Objects are a key part of the concept of Object-Oriented Programming (OOP) which includes the concepts of encapsulation, inheritance, and polymorphism. In this example, Car is a class and carObj is an object of that class. The object carObj is given attributes and values, and these are then printed out.`,
        code:
`#include<iostream>
using namespace std;

// Define a class
class Car {
    public:
        string brand;  
        string model;  
        int year;  
};

int main() {
    // Create an object of Car
    Car carObj;
    carObj.brand = "Toyota";
    carObj.model = "Corolla";
    carObj.year = 2020;

    // Print car details
    cout << carObj.brand << " " << carObj.model 
        << " " << carObj.year << endl;  
        // Outputs: Toyota Corolla 2020

    return 0;
}`
    },
    {
        SlideNumber: 7,
        SlideTitle: "Exception Handling",
        // img : Olu,
        disc : `exception handling is a mechanism used to manage the occurrence of unexpected or exceptional events that arise during the execution of a program. These exceptional events can include logical errors or physical errors, such as trying to divide by zero or attempting to open a file that does not exist. Using exception handling, you can effectively deal with these events without crashing the entire program. In the following code, we're trying to divide by zero which is not allowed. Instead of letting the program crash, we catch this error and print a friendly message to the console. This is the power of exception handling.`,
        code:
`#include<iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 0;
    int c;

    try {
        if(b == 0)
            throw "Division by zero error";  
                // Throw an error
        else
            c = a/b;  // Perform division if no error
    } catch(const char* e) {
        cout << "Exception: " << e << endl;  
            // Catch and handle the error
    }

    return 0;
}`
    },
    {
        SlideNumber: 8,
        SlideTitle: "File I/O",
        // img : Olu,
        disc : `File I/O in C++ refers to the operations performed on files, specifically Input and Output operations. Input operations read data from a file, while output operations write data to a file. C++ provides high-level abstractions to interact with files through streams. The fstream library provides classes like ifstream for reading (input) from files, ofstream for writing (output) to files, and fstream for both. In the following example, a file is created named "example.txt" and writes a line of text to it. The file is then closed. After that, the program opens the file for reading and prints each line to the console. The file is then closed once more.`,
        code:
`#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ofstream myfile;

    myfile.open("example.txt");  // Open a file
    myfile << "Writing this to a file.";  
        // Write to the file
    myfile.close();  // Always remember to close the file

    std::string line;
    std::ifstream myfile2("example.txt"); 
        // Open the file for reading
    if (myfile2.is_open()) {
        while (getline(myfile2, line)) {
            std::cout << line <<;  
            // Read and print each line from the file
        }
        myfile2.close();
    }
    
    return 0;
}`,
    },
];
