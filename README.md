# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs the application.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Tasks

## \_design/accessibility

### 2pt Responsive design, works on mobile and tablets

- Responsive design is a good way to handle multiple devices.

### 1pt No UI framework used (such as Bootstrap, Ant)

- Not needed to solve this.

## \_functionality

### 1pt Sort by name and office

- Needed some functionality, sort seems basic and trivial.

### 2pt Only render a set of profiles using either infinity scroll, pagination or a load more button

- Better for performance to not load all of the items at once.

## \_testing/QA

### 2pt End-to-end testing (with an existing framework)

- E2E is a good way to find issues in the application that includes multiple components, that aligns more with the user interaction, experience and journey.

### 2pt Unit tests for existing functionality (reasonable coverage)

- Unit testing is a fast great way to test code. Unit testing and E2E testing is a good combination for an increased quality

# Design

React is my main framework, I like it since it is fast and it scales in a good way. If this project were to grow, i would consider including Redux for state management, but I don't think it is necessary at this stage.

- App.js fetches the data and pass it on to Colleagues.js if successfully fetched. App.js conditionally renders the loading spinner during fetching, Colleagues if success and Error if data could not be fetched.
- DropDown.js is made stateless, to be reusable and used as widely as possible.
- Pagination.js takes a list as render prop and serves it a new modified list after the pagination component has performed its operations, like a container.
- layout/Colleagues/ is the layout component with a useState hook for the items to be presented, in this case sorted.
- Toolbar.js holds the sorting logic and all other logic that would be implemented in the "Potential filter and tools area". It serves its parent Colleagues with the updated items (sorted, filtered, etc).

I've tried to test the components and features as much as possible, using unit tests, integration tests and e2e tests.

I try to keep master clean, running all tests on commit hook. Usually, dev and test would have to approve my pull request before merging the feature branch into master.

![Overview](./Diagram.png)

Separating the logic from the presentational components makes it easier to replace and extend the code. If we were to add a new list, if we want to replace Pagination with InfinityScroll, the pattern would be the same. Extending logic with filtering etc would be done in the Toolbar.

# Backlog

- Handle broken images
- Show loading spinner when loading colleagues
