<img src="src\assets\logo.svg" alt="logo" align="right">

# Bcredi Frontend Challenge &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Registry page - Bcredi Front-End Challenge

This project aims to implement a registration interface as part of the selection process for the Front-End Developer vacancy.

The page allows the user to enter an email, CPF, date of birth and password to simulate the registration. All inputs go through a validation process so that they can be submitted using the form. Passwords with less than 8 digits will be rejected, so as date of birth on years bigger than the current one. Input data is only submitted once the user checks the privacy license agreement box.

After submittion, a message confirms the registration and the data is displayed on the console.

The project was developed using [React JS](https://pt-br.reactjs.org/) and deployed using [Firebase](https://firebase.google.com/). Besides React and Firebase, other technologies were employed, such as: [TypeScript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/), [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/projects/enzyme/).
## [Bcredi Register - Demo](https://bcredi-register.web.app)

<br>

## Getting started

Installing the necessary dependencies:

```bash
$ yarn install
```

Runnig the application:

```bash
$ yarn start
```

The following message will appear:

```bash
Compiled successfully!
Compiled successfully!

You can now view bcredi-frontend-challenge in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.2:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

If the development environment does not open automatically in your default browser, you can access it by typing the local environment, which was provided in the previous message, in your browser's navigation bar:

```bash
http://localhost:3000
```

## Developing

### Built With

- React (16.8.0)
- Styled Components (5.2.1)
- Typescript (4.0.3)

### Tested With

- TS-Jest (26.4.1)
- Enzyme (3.11.0)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)

### Setting up Development

To start developing the project:

```bash
# Clone the repository
$ git clone git@github.com:ozielalves/bcredi-frontend-challenge.git

# Go to repository root
$ cd bcredi-frontend-challenge/

# Switch to the branch the project was developed
$ git checkout Oziel

# Install dependencies
$ yarn install

# Starts a development environment
$ yarn start
```

Runs the application on localhost: 3000.

### Deploying

After completing the development process, it is possible to deploy the application using any hosting service available. This project was deployed using Firebase.

Inatalling Firebase:

```bash
$ npm install -g firebase-tools
```

Login into your firebase account using a google account.
```bash
$ firebase login
```
Deploy:

```bash
$ firebase deploy --only hosting -m "Deploying the most stable version"
```
For more information see documentation
- [Firebase CLI](https://firebase.google.com/docs/cli?hl=pt-br#windows-npm)
- [Firebase Host](https://firebase.google.com/docs/hosting/quickstart)

### Folder Structure

```bash
bcredi-frontend-challenge
├───.firebaserc
├───.gitignore
├───firebase.json
├───package.json
├───README.md
├───tsconfig.json
├───yarn.lock
├───build
├───node_modules
├───public
└───src
    ├───assets
    ├───components
    │   ├───ActionButton
    │   │   └───index.tsx
    │   ├───BirthDateInput
    │   │   └───index.tsx
    │   ├───CheckBox
    │   │   └───index.tsx
    │   ├───CpfInput
    │   │   └───index.tsx
    │   ├───EmailInput
    │   │   └───index.tsx
    │   ├───Hero
    │   │   └───index.tsx
    │   ├───PasswordInput
    │   │   └───index.tsx
    │   ├───RegisterForm
    │   │   └───index.tsx
    │   └───TextField
    │       └───index.tsx
    ├───pages
    │   └───Register
    │       ├───index.tsx
    │       └───types.d.ts
    ├───styles
    │       └───index.ts
    ├───utils
    │    └───__tests__
    │       ├───__snapshots__
    │       ├───BirthDateValidation.test.ts
    │       ├───Checkbox.test.tsx
    │       ├───CpfValidation.test.ts
    │       ├───EmailValidation.test.ts
    │       ├───Hero.test.tsx
    │       ├───PasswordValidation.test.ts
    │       ├───RegisterForm.test.tsx
    │       ├───RegisterPage.test.tsx
    │       └───TextField.test.tsx
    ├───App.tsx
    ├───index.css
    ├───index.tsx
    ├───react-app-end.d.ts
    ├───reportWebVitals.ts
    └───setupTests.ts
```

## Tests 

### Setup

```

Adapter (setupTests.js)

```bash
import "@testing-library/jest-dom/extend-expect";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

```
###  Running tests

```bash
$ yarn test
```
## Style guide

- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - Don't repeat yourself
