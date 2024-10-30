STATE
The state is a built-in React object that is used to contain data or information about the component. 
A component's state can change over time; whenever it changes, the component re-renders.

State is a built-in feature of React components used to store and manage changing data. State is local and specific to the component, meaning it isn’t accessible to other components unless explicitly passed down.

Rules of state:
1.) State is immutable: 
    You cannot change state directly; instead, you use an updater function to create a new version of the state.
2.) State triggers re-renders: 
    When the state of a component changes, React re-renders that component to display the latest state.


HOOKS
Hooks in React are special functions that let you "hook into" React features like state and lifecycle methods without using class components. 
They were introduced in React 16.8 to make function components just as powerful as class components.


Here are some essential hooks:
1.) useState: 
    This hook is used to add local state to a functional component.
2.) useEffect: 
    This hook manages side effects (tasks outside React’s direct control, like data fetching, 
    subscriptions, or manually changing the DOM).
    useEffect runs a function every time the component renders or when specific dependencies change.
3.) useContext: 
    This hook provides a way to access global values shared across components, avoiding “prop drilling” (passing props down through many layers).
4.) useReducer: 
    A more advanced hook for complex state management that is similar to useState but more suitable for scenarios with multiple state transitions.

In React, side effects are operations that affect something outside of the component’s scope or do not directly contribute to returning JSX, such as fetching data, manually updating the DOM, or setting up a timer. These actions are necessary but do not belong to the component’s rendering logic.

In class components, lifecycle methods are special methods that run at different stages of a component's life: mounting, updating, and unmounting. With hooks, the same effects are achieved using useEffect.

Lifecycle methods in class components:
1.) componentDidMount: Runs once after the component is mounted. Useful for data fetching.
2.) componentDidUpdate: Runs after each update.
3.) componentWillUnmount: Runs before the component is removed.

React is Declarative
Declarative programming is a style where you describe what the UI should look like based on the current state, not how to get it there. In contrast, imperative programming (like vanilla JavaScript or jQuery) involves giving step-by-step instructions on how to manipulate the DOM.

In an imperative approach, you would manually update elements:
// Vanilla JavaScript
const button = document.getElementById("increment");
const countElement = document.getElementById("count");
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  countElement.textContent = `Count: ${count}`;  // Manually updating the UI
});

// React.JS
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


Why declarative is better:
1.) Simplicity: 
    React handles DOM updates for you. You don’t manually manipulate the DOM.
2.) Predictability: 
    The UI is always consistent with the state. Any change in state results in a predictable re-render.



Key Points for Students
1.) React is Declarative: 
    React components re-render when state changes. Unlike regular JavaScript, you don’t manually update the DOM.
2.) React State: 
    You cannot directly modify state variables (like you do with regular variables) because React wouldn’t detect the changes. Instead, you use state setters (e.g., setCount) to ensure React knows about and responds to these changes.
3.) Hooks: 
    Hooks like useState and useEffect make it easy to add state and lifecycle features to function components.

This approach helps React apps stay predictable, organized, and perform better, especially in large applications with frequent state updates.