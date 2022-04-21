## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## The Use Case 

An API call (simulated) is made to fetch a list of questions for a topic and then this creates a wizard which runs thru and gets the answers to the questions.

The questions can have responses of various types eg text, numerical, date, dropdown, checkbox etc. 

It can be configured as to how many questions to display per page of the wizard, and the user has the option of going back to previous questions. The back facility is itself configurable ie whether to offer it or not. Before going to the next question page, the responses are validated and if not valid, then an error message shows and the user is kept on the same page.

At the end, the user is shown their responses and has the ability to edit before submitting. In future its intended to make the editing configurable but for now its part of the path.

The submission is simulated via an alert, but normally would be posted to some API.

## Functionality

You can configure how many questions are to appear on each page of the wizard by sending a questionsPerPage prop

Answers can be edited from the Summary page

On Submit the answers are shown in an alert for the demo, but would normally be posted to some API


