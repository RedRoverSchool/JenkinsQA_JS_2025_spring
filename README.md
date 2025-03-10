<h1 align="center">ProjectJS 2025 spring</h1>
<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/RedRoverSchool/JenkinsQA_JS_2025_spring">
  <img src="https://img.shields.io/github/last-commit/RedRoverSchool/JenkinsQA_JS_2025_spring">
  <img src="https://img.shields.io/github/contributors/RedRoverSchool/JenkinsQA_JS_2025_spring">
  <img src="https://github.com/RedRoverSchool/JenkinsQA_JS_2025_spring/actions/workflows/parallel.yml/badge.svg">
  <img src="https://img.shields.io/github/issues/RedRoverSchool/JenkinsQA_JS_2025_spring">
  <img src="https://img.shields.io/github/issues-pr/RedRoverSchool/JenkinsQA_JS_2025_spring">
  <img src="https://img.shields.io/github/stars/RedRoverSchool/JenkinsQA_JS_2025_spring" alt="stars" />
  <img src="https://img.shields.io/github/forks/RedRoverSchool/JenkinsQA_JS_2025_spring" alt="forks" />
  <img src="https://img.shields.io/badge/cypress-14.1.0-brightgreen">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields"/>
</p>

<p align="center">
  <img src="media/jenkins.svg" alt="Jenkins logo" width="100"/>
</p>

> Jenkins is an automation tool designed for Continuous Integration (CI) and Continuous Deployment (CD). It allows automatic execution of build, testing, and deployment processes whenever code changes are made in the repository.

<p align="center">
<a href="https://RedRoverSchool.github.io/JenkinsQA_JS_2025_spring"> Last run Allure report</a>
</p>


## Tech Stack
<p align="center">
  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/RUNS%20WITH%20GITHUB%20ACTIONS-BLUE?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/RUNS%20ON%20DOCKER%20CONTAINER-BLUE?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Allure-EB5A5A?style=for-the-badge"/>
</p>

____
<a id="cases"></a>
## ️ Test documentation

- 📊 Feature Matrix - TODO-ADD-FEATURE-MATRIX link


**Project Structure**

This project is a complete example of a Test automation Framework using Cypress.

AUT for this project is a docker based Jenkins instance.

Automated tests include:

- Functional UI tests using Cypress native commands

Global cleanup is executed before each test via API calls.

**Reporters**

Allure reporter with previous runs history is used to generate test reports.

To generate reports, run command ```npm run report```

Allure report is available in report/allure-report folder.

CI pipeline is executed on GitHub Actions and test results are uploaded to Allure report and hosted on GitHub pages. - [Project report](https://RedRoverSchool.github.io/JenkinsQA_JS_2025_spring)

To clean the previous run reports use command ```npm run clean```

____
<a id="allureReport"></a>
## <img width="30" style="vertical-align:middle" title="Allure Report" src="media/allure.svg"> Allure Report Example

<p align="center">
<a href="https://RedRoverSchool.github.io/JenkinsQA_JS_2025_spring"> Last run Allure report</a>
</p>

<p align="center">
  <img title="Allure Report" src="media/allure-report.png">
</p>

**How to start working in our project?**

**Prerequisites**

- Docker
- Node.js
- NPM
- VSCode
- Jenkins up and running

1. Clone repository to your machine.

2. Navigate to project root folder.

3. Run command ```npm install``` in terminal VScode to install dependencies.

4. Copy and paste the file ```cypress.env.json.example``` to project root folder. Сhange the file name to ```cypress.env.json```. Put provided to you by teacher credentials in json file.

5. Setup Jenkins using Docker:

- Download and install Docker Desktop (https://www.docker.com/products/docker-desktop)
- Add to cypress.env.json the following credentials provided to you by teacher: ```local.admin.username```, ```local.admin.password```, ```local.port```, ```local.host```, ```local.admin.token```.
- Run command `docker run --name jekins --detach -p 8080:8080 -p 50000:50000 jenkins/jenkins:2.492.2-lts-jdk17`
- Verify the Jenkins is running using ```http://localhost:8080```. If you see the login page of Jenkins, you can start creating your tests and run them using Cypress. 
- Use ```npx cypress open```  to run tests.

**Project Coding Convention**

Naming conventions:
We shall use Camelcase for naming conventions: ```camelCase```

Spec names:
Spec should have a name containing the name of the userstory (US): ```header.cy.js``` 


**Spec structure:**

- Each block ```describe``` should contain the name of spec file
- Each test (```it```) should contain name of test case (```TC```) 

example:
describe('Header', () => {

    it('Verify logo jenkins is visible on the header', function () {
        ...
    })

    it('Verify logo jenkins is clickable and redirects to homePage', function () {
        ...
    })
}) 

**Faker library**

The project utilises Faker.js library. You can find more info here: https://v6.fakerjs.dev/guide/
Use this import in your file: 
import { faker } from '@faker-js/faker';

**Testing library**

You can find more info here: https://testing-library.com/docs/cypress-testing-library/intro/

**Attention!**

Students are not allowed to install any libraries, plugins, etc. to avoid changing configuration files. 

**!!Do not push changed files as:**

- ```package.json```
- ```package.lock.json```
- ```cypress.config.js```
- ```e2e.js```
- ```ci.yml```
- ```cancel.yml```
- ```globalHooks.js```
- ```cleanData.js```