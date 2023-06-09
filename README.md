# **Learn C++**

![Learn C++](./src//components//Assets//Images/LearnC%2B%2B.png)
## **Table of Contents**
- [License](#license)
- [Project Overview](#project-overview)
- [Purpose and Inspiration](#purpose-and-inspiration)
- [Unique Technologies](#technologies)
- [Functionality and Features](#functionality-and-features)
- [Deployment](#Deployment)
- [Testing](#testing)

## **License**
This project is licensed under the MIT license.

## **Project Overview**
"Learn C++" is an innovative, hands-on learning platform that focuses on practicality, starting with real-world projects and dissecting them to teach users the fundamentals of C++. The platform engages users through a combination of interactive lessons, quizzes, and challenges, effectively fostering a deep understanding of C++ basics. 

## **Purpose and Inspiration**
Jay Padrnos approached me with a unique request - he was keen on learning C++, but not in the conventional way. Instead of diving into a purchased course, Jay wanted to try a more hands-on approach that allowed him to engage with the language directly. He proposed an interesting challenge for me: to create a learning platform that starts with projects and then deconstructs them, contrary to the traditional method of learning code first and then applying it. Embracing this fresh perspective, I embarked on designing a platform tailored to Jay's learning style, all the while fostering his curiosity and passion for C++.

## **Unique Technologies**
**TypeScript:**
TypeScript is a statically-typed superset of JavaScript, developed by Microsoft to catch common errors early in the development process. It allows developers to specify types for variables and function parameters, providing better tooling and documentation. Once TypeScript code is written, it's compiled into JavaScript, enabling it to run in any JavaScript environment.

## **Functionality and Features**
The project is split into three sections: Lessons, Quizzes, and Challenges. Each section has a final project the user will end up building, and each lesson is designed to break down each new line of code and explain its purpose in the project. 

Quizzes are meant to test the basics of the lessons, with one question dedicated to each lesson. If the user is taking notes, which is encouraged in the 'Tutorials' sections, the user should have no problem. 

Finally, the challenges are designed for the user to build the section's project from 'scratch'. The user is given starter code, but as the challenges get harder, they start with less starter code. It is also encouraged to repeat the challenge over and over, starting with less and less starter code, until they can complete the challenge without any starter code.

I made the decision to use dangerouslySetInnerHTML for this particular project because the data being loaded into the application is static and fully under my control, which eliminates the risk of XSS attacks. However, I'm fully aware of the security implications and in a production application where user-generated or external data is being handled, I would certainly use a different approach to mitigate security risks.

## **Deployment**
[Deployment Link](https://learn-c-plus-plus.netlify.app/)

## **Testing**
Coming Soon!