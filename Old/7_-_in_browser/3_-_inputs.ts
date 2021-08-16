/*

Here, we take some inputs

First, we instantiate the variables to hold the two elements
When the DOM has loaded, we then set the variables
  (note that we have to explicitly state that the input element is an
  input)
Then we have the 'useInput()' function, which is binded to the button
This function sets the output text to the 'value' of the input box
  (note that we first have to make sure that 'inputElem' and 'outputElem'
  are defined first)

*/

var inputElem: HTMLInputElement | null;
var outputElem: HTMLElement | null;

document.addEventListener('DOMContentLoaded', ev => {
    inputElem = document.getElementById('textInput') as (HTMLInputElement | null);
    outputElem = document.getElementById('output');
});

function useInput() {
    if (!inputElem || !outputElem) return;
    outputElem.innerText = inputElem.value;
}