# Learn C++

(Screen shot coming soon!)
## Table of Contents
- [License](#license)
- [Project Overview](#project-overview)
- [Purpose and Inspiration](#purpose-and-inspiration)
- [Unique Technologies](#technologies)
- [Functionality and Features](#functionality-and-features)
- [Deployment](#Deployment)
- [Testing](#testing)

## License
This project is licensed under the MIT license.

## Project Overview
"Learn C++" is an interactive learning platform that starts with projects and works backwards, giving the user actual examples of the code they are learning. 

## Purpose and Inspiration
This project was built for the client Jay Padrnos who wanted to see if he wanted to learn C++ without buying a course, but also be hands on with his learning. He requested that I built something that started with projects and work backwards, instead of the traditional method of learning the code and then applying it. 

## Unique Technologies
TypeScript:
TypeScript is a statically-typed superset of JavaScript, developed by Microsoft to catch common errors early in the development process. It allows developers to specify types for variables and function parameters, providing better tooling and documentation. Once TypeScript code is written, it's compiled into JavaScript, enabling it to run in any JavaScript environment.


## Functionality and Features
The project is split into three sections: Lessons, Quizzes, and Challenges. Each section has a final project the user will end up building, and each lesson is designed to break down each new line of code and explain its purpose in the project. 

Quizzes are meant to test the basics of the lessons, with one question dedicated to each lesson. If the user is taking notes, which is encouraged in the 'Tutorials' sections, the user should have no problem. 

Finally, the challenges are designed for the user to build the section's project from 'scratch'. The user is given starter code, but as the challenges get harder, they start with less starter code. It is also encouraged to repeat the challenge over and over, starting with less and less starter code, until they can complete the challenge without any starter code.

I made the decision to use dangerouslySetInnerHTML for this particular project because the data being loaded into the application is static and fully under my control, which eliminates the risk of XSS attacks. However, I'm fully aware of the security implications and in a production application where user-generated or external data is being handled, I would certainly use a different approach to mitigate security risks.

## Deployment
[Deployment Link](https://learn-c-plus-plus.netlify.app/)

## Testing
Comming Soon!