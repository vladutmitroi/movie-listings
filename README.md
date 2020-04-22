## Introduction

Movie listing challenge from Zone Digital

https://zone.github.io/frontend/movie-listing

## Architecture

- React JS as the base framework for UI rendering
- JavaScript ES6
- Redux for state management
- CSS/SASS for styling
- React router for navigation between pages

The app has the following structure:

```movie-listing/

    node_modules
    public/
        index.html
        favicon.ico
    src/
        index.js
	    App.js
        App.css
        components/
            genres-list/
                genres-list.component.jsx
                genres-list.styles.scss
            loader/
                loader.component.jsx
                loader.styles.scss
            movie-card/
                movie-card.component.jsx
                movie-card.styles.scss
            movie-list/
                movie-list.component.jsx
            rating/
                rating.component.jsx
                rating.styles.scss
        redux/
            actions/
                filterActions.js
                getGenres.js
                getMovies.js
            reducers/
                rootReducer.js
                filteresReducer.js
                genresReducer.js
                moviesReducer.js
```

## App details

- Inside `src/index.js`, the `App.js` component will be rendered.
- App.js is the parent component, where the data from redux store is being passed as props and then to its children components.
- The children components rendered in App.js
  - Loader component - shown while the data is retrieved
  - Filter container - GenresList and Rating components, which will be used to filter the movies
  - Movies container - MoviesList where MovieCard component will be rendered
  - Movie details - using react router we navigate to a details page, showing additional details for a selected movie

Once the user selects one/both filters, only movies matching the selection will be shown

- Genre filter - if one genre is selected, all movies with the selected genre will be shown - if more than one genre is selected, only movies having `all` selected genres will be shown
- Rating filter - only movies with the average_rating equal or higher than selected rating will be shown
- Movies are shown in descending order, by their popularity property

### How to run

node js to be installed (`node --version` in terminal, to check the installation/version)

Copy the project on your machine

Install dependencies using `npm install` inside the project`s root folder

Update `key` inside `/src/App.js` with your TMDb API key

Run `npm start` to start in development mode and run the project
