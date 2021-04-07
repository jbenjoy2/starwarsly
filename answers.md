- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  `A:`The purpose of the regular expression, which here is '/\d+/', is to pull the digits out of the url that is returned from the api. By using string.match(), an array is returned with the results of all matching string segments with one or more digit. By selecting the first item out of the array, the correct digit is stored to be used in the urls for the people and the planets.

- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?

  Redux is persisting using the library 'redux-persist'. Using this library, the redux store is persisting in the browser's localStorage. In setting up the config object for the library's persistReducer, the storage key is set to "storage" which is imported from the library, and correlates to localStorage.

- What does `combineReducers` do? Why are we using it?

  `combineReducers` takes in multiple other reducer functions, and combines them into one. This way, there is one central store that can be used to reference state, but each reducer has its own actions and state to keep it cleaner and more organized.

- How does the "Reset to Fresh Exploration" feature work?

  `A:`It dispatches a type of RESET to the root reducer, which triggers the RESET case in all of the individual reducers, each of which sets its state back to the initial state (which in all of the reducers, is an empty object.)

- Why are `FilmList.js`, `PlanetList.js`, and
  `PersonList.js` all simple components that use an `ItemList`? Why is this a good design?

  `A:`They are all very similar components in what they do and how they look, and therefore can utilize the reusble ItemList component for rendering. Their only difference is what data they're using from the store, and therefore those use cases are separated into dumb components which keeps everything nice and organized and readable.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?

  `A:`Selecting all of the films, and then checking all of them again in the component is more expensive than just right away checking in the store if the first film is loaded. In this way, that is checked immediately on component render, instead of having to load all films every time the component renders and then check the logic WHILE it's rendering.

- What good ideas for designing and organizing React apps have you learned from
  studying this code?

  `A:`I really like the reusable list, as well as the "unknown" feature that changes as pages are visited. This keeps the store nice and clean and updated only when necessary. I also like how readable and organized it is and gives me a good idea of how to really organize a react-redux app. I also like the redux-persist library, but not sure why you can't just do this using localStorage explictly right in the reducers (as i've done on other projects). I'm assuming this is just much cleaner and takes all the guesswork and thinking out of it.

- Which Star Wars character would make the best React developer, and why?
  `A:`Definitely C-3PO! He is fluent in over 6 million languages. I have to imagine that includes: javascript, html/css, React syntax, redux, etc!
