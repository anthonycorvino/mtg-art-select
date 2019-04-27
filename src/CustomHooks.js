import {useState} from 'react';

/* Trying out custom hooks for handling user input
See https://reactjs.org/docs/hooks-intro.html for more info */



const useDeckForm = (callback) => {
    /* Only 2 variables are ever passed from useState, an 
    index of arguments and setter to update them. The callback
    argument to useDeckForm is also a function and another hook
    can be passed as the argument, see line ~38 of
    App.js for its invocation with the deckSubmitted hook
    as an argument */

    const [inputs, setInputs] = useState({});

    /* preventDefault stops the page from refreshing when a form
     is submitted */
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }
    
    /* This should help later but has no real usage as of now */
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: 
            event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs 
    };
}

export default useDeckForm;