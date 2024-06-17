# AUTOMATION LATLONG PROJECT

Project build with Cypress + Typescript + Cucumber

# Installation and Setup

Run this commands in order to setup Cypress and needed dependencies in your local machine:

```bash
cd /your/project/path
npm install
npx cypress install


# Running tests locally
Open the Cypress GUI by executing `npm run cy:open` for running tests using cypress dashboard.
Open the Cypress GUI by executing `npm run cy:run` for running tests using cypress headless.

# Reports locally
Reports will be generated as a .html file in cypress/results path as index.hml

# Running tests on github actions
> Go to the reporsitory https://github.com/kuaker/apply-digital
> Go to the Actions label
> On the left select
    - Run Parallel Cypress Tests
> Then click on Run workflow button
> Select the branch (master)
> Select the env
    -qa
    -staging
> Click on Run Workflow


# Reports in GithubActions
> Afterevery runnning, dive into the job
> Scroll down to the Artifacts section > Will appear a report to download
> Select the report and download it
> Open the zip file
> Click on index.html
> Then You will see the assertions and a video attached.


# Project Structure and settings
> The project was built using cypress framework with Typescript.
> I set it up to run it in differents environments (/config)
> I used assert-pages in order to reuse assertions
> I created some data generators for reusability.
> I set it up to run it on github actions in parallel.

```
