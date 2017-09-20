# Viafree Series Listing - Oscar Hallström

## Design decisions
The app has two basic routes; the _list all series_ and a _series details_. The main view lists all series available from the api in a grid, with each show rendered as a card. A card is clickable and clicking on it will take you to a details page with a short synopsis of the show.

State management is handled by Redux, and since the application has some asynchronous data loading, redux thunks and async dispatches are utilised. This way, the app will be able to distinguish. For the most part, I've tried to use a connected state (a component that has knowledge of the state) only for the topmost component in the hierarchy, and passing on the data to other components via props.

Some assumptions were made during the development. For one, it is assumed that all series will have a details endpoint at `/series/:slug`, where the slug is provided as part of the `/serier/samtliga` api response in the form of a `publicPath`. In a more extensive application, the details data from a series would probably include more info about each season, and potentially involve more api calls on a details page. In this app however, the same info you can get from a details api call can also be preloaded from the main series list, if navigation occurs within the app. To support deep-linking in the app, a call to `/series/:slug` will be made, instead of fetching all series and looping through them.

For the hero images, it is a assumed that the urls (template) contain a `?{height,width,token}`. As no information has been provided about the usage of those parameters, they are removed from the url in the application, to allow the app to display a hero image on the details page.

### Improvements

* Some basic unit tests are provided, but they should definitely be more extensive in a production environment.

* I've created the hero image component with text included in the component, but it might be better to let the overlay text live as it's own component.


## Build process
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Create React App comes with a few scripts readily available for development and building. Below, the relevant scripts are listed. If you prefer, you could also use `yarn` for building.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
