### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?

  `A:` Redux is simply a library used to manage state. It is really helpful when it comes to managing lots of state at once, especially when that state might need to be used all over the app. It helps prevent prop drilling (instead, the compoments can access the state directly from redux.)

- What are three features of the Redux developer tool in Chrome?

  1. Can see what actions have been dispatched and in what order
  2. At any given point in time, can see what the state looks like (Depends on which action is selected)
  3. Can see what is changed in state by a dispatched action by looking at the "diff" tab.

- What is a store?

  `A:` A store in Redux is where the state is, well, stored. It is centralized to this one place. In order to work, though, Redux needs to know how to define the initial state in the store, and how to change aspects of the state. This can be done by passing in a reducer function.

- What is a reducer?

  `A:` A reducer is a pure fuction that takes in state and action as it's components. Using the action, a new state is returned.

- What is an action?

  `A:`An action in redux is an object containing at the very least a "type" key and tells the reducer how to change the state

- What is an action creator?

  `A:`An action creator is simply a function that creates an action; i.e it returns an object with at least a "type" key

- How does data flow in a React/Redux application?

  `A:`First a store is created, dispatching the initial action (&&INIT), and the reducers return the initial state they receive. Then, anywhere the useSelector hook is being used, it runs for those components and provides data to them, triggering a render. If any actions are dispatched, all components connected to the store that then receive new data from the dispatch's change with rerender.

- What is the purpose of the `<Provider>` component?

`A:`The provider gets wrapped around the top level component, and accepts a store as a prop. This makes the store available to the rest of the app.

- What is the purpose of the `useSelector` hook? What does it return?

  `A:`useSelector is how the store's values can be accessed in a component. Accepting a callback, it returns the data from the store that is returned from the callback.

- Describe the `useDispatch` hook. What do you use it for?

  `A:`useDispatch is the hook used to make changes to the store. Per its name, it is used to dispatch actions. To use it, simply define a new constant that has the value of calling the useDispatch hook as a function. Then, invoke that new constant as a function, which takes in an action (as defined above in a previous question) as its argument.

- What is redux-thunk and why would you use it?

  `A:`Redux-thunk is a package that supplies us with middleware that can be used to create more powerful actions. It is especially useful for async scenarios.

- What are propTypes?

  `A:`propTypes simply help to specify what type is expected of each prop for a component. Not following the set types doesn't break the app, it simply causes a warning.

- Describe the `useCallback` hook. What is it used for?

  `A:`useCallback accepts a function as its first argument, and, like useEffect, a list of dependencies for its second. It tells react to refrain from redefining a new version of that function on rerender unless one of the dependencies changes. Therefore, if that function is being passed down or being called in a useEffect, it won't be a new function on the parent's render and it therefore won't trigger a re-render of the child. This is used commonly when a function is defined inside of a component that is then utilized in useEffect, so that useEffect doesn't continue to infinitely render the parent.

- Compare and contrast the `useReducer` hook with Redux (including react-redux). Why would you choose one over the other?

  `A:`useReducer has similar behavior to redux. It takes in a reducer and initial state as its arguments, and then it returns an array that can be destructured to pull out the state, along with a dispatch function. This dispatch function then can be used to fire off actions like in redux, but with less restrictions. For example, "type" is not required as a key; the key simply needs ot match whatever is in the reducer. In order to get the redux funcionality of passing the store around, it needs to be combined with the ContextAPI, with useReducer higher-up in the hierarchy. I personally would choose redux since to me, it's already put together and much easier to use without having to deal with separate contexts for dispatch and state, and it's just overall cleaner in my opinion.
