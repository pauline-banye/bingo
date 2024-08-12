# [App Name] Integration Documentation

## Overview

[Description]

## DB Diagram and API architecture

[DB Diagram and API architecture](https://docs.google.com/document/d/1MzhGGhV4L2d9WJ8NWI5ZZjAnh7StJL2yxDY6tntDHI8/edit?usp=sharing)

## Folder Structure

```
├───.github
│   ├───ISSUE_TEMPLATE
│   └───workflows
├───config
├───src
│   ├───database
│   ├───entities
│   ├───guards
│   ├───helpers
│   ├───modules
│   │   ├───auth
│   │   │   ├───dto
│   │   │   ├───interfaces
│   │   │   ├───strategies
│   │   │   └───tests
│   │   └───user
│   │       ├───dto
│   │       ├───entities
│   │       ├───interfaces
│   │       └───options
│   ├───shared
│   │   └───inteceptors
│   └───utils
├───test
└───wiki_readme
```

## Dependencies (Dev)

- Node.js
- TypeScript
- Express
- ts-node-dev
- [Other dependencies including nestjs' dependencies]

## Getting Started

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager, included with Node.js)
- [NestJs](https://docs.nestjs.com) (NestJS' Documentation)
- [Git](https://git-scm.com/)

## Setup Guide

#### Detailed guide on setting and starting the Application

- [Setup Guide](setup-guide.md)

## Contribution Guide

## Getting Started

#### If you don't have git on your machine, [install it](https://docs.github.com/en/get-started/quickstart/set-up-git).

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```bash
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

For example:

```bash
git clone git@github.com:this-is-you/hng_project.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.


### Make Changes

Make your changes to the codebase. Ensure your code follows the project's coding standards and guidelines.

### Run Tests

Run the existing tests to ensure your changes do not break anything. If you added new functionality, write corresponding tests.

```sh
npm run test
```

# Version Control Management

The codebase is managed using GIT and the branch management philosophy is a hybrid of Gitflow called HubFlow. HubFlow seeks to integrate a seamless workflow where teams can utilize GitFlow against the Github Online Infrastructure.

## HubFlow Installation

### Windows

```
git clone https://github.com/datasift/gitflow hubflow
cd hubflow

cp git-hf* <git-install-dir>/bin/
cp hubflow-common <git-install-dir>/bin/

git submodule update --remote --init --checkout
cp shFlags/src/shflags <git-install-dir>/bin/hubflow-shFlags
```

### Mac or Linux Based

To install HubFlow on your local machine, you can run the following commands anywhere on your machine outside of the project folder

```
git clone https://github.com/datasift/gitflow
cd gitflow
sudo ./install.sh
sudo git hf upgrade
```

To test the installation and list the available commands, run the following:

```
git hf help
```

## HubFlow Commands

### 1. Initialize HubFlow Tools (Run within the project folder)

```
git hf init -af
```

Populate the necessary values i.e.

- `main` branch for the most stable version of the project that can be deployed to production.
- `dev` branch for development which acts as the base branch for all feature development.
- `feature` branch for implementing new features and serves to isolate development without disrupting the stability of the codebase
- `staging` branch for features that are ready to be deployed. It is the stable image of the dev branch where QA can test features 


### 2. Create a feature branch

```
git hf feature start <FEATURE_BRANCH_NAME>
```

If you are starting to work on an existing feature branch, do this:

```
git hf feature checkout <FEATURE_BRANCH_NAME>
```

### 3. Publish the feature branch

```
git hf push
```

Once you have completed your feature implementation, initiate a pull request on the Github Repository from your `feature` branch into the `dev` branch, only after your PR has been merged into `dev` can you close out the feature branch locally on your machine. This is called a **FEATURE FINISH**

### 4. FInish the feature branch

```
git hf feature finish <FEATURE_BRANCH_NAME>
```

<br>

For more details about the other commands, visit - https://datasift.github.io/gitflow/GitFlowForGitHub.html

<br><br>

## Submit your changes for review into Staging

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon your changes will be merged into the staging branch of this project. You will get a notification email once the changes have been merged.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine using Git.

```sh
git clone https://github.com/your-username/[app-name].git
cd [app-name]
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies.

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add your environment-specific variables. You can use the provided `.env.example` file as a reference.

```sh
cp .env.example .env
```

Edit the `.env` file to match your environment configuration.

### 4. Compile TypeScript

Compile the TypeScript code to JavaScript.

```sh
npm run build
```

### 5. Run the Development Server

Start the development server with the following command. This will also watch for any changes in your code and automatically restart the server.

```sh
npm run dev
```

### 6. Run the Production Server

To run the application in a production environment, use the following command:

```sh
npm run start
```

### 7. Verify the Setup

Open your browser and navigate to `http://localhost:3000/api/v1/` to verify that the application is running correctly.

## Scripts

Here are some useful npm scripts that you can use during development and production:

- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm run start:dev`: Starts the development server with live reloading.
- `npm run start`: Starts the production server.
- `npm run test`: Runs the test suite (if available).
- `npm run lint`: Runs the linter to check for code style issues.

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express Documentation](https://expressjs.com/)

By following these steps, you should have your Node.js and TypeScript application up and running. If you encounter any issues, please refer to the documentation of the respective tools or seek help from the community.

## API Endpoints

All API endpoints can be referenced in the [API Reference](API_REFERENCE.md) document.

## Versioning

This project is versioned to ensure backward compatibility and easy maintenance. The current version is [version].
