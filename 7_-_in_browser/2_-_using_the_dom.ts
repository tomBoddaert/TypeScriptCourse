/*

To get an HTML element from the DOM (Document Object Model), we can use
  'document.getElementById(elementId: string)' to get an element using its
  id
To get an array of elements with the same class, we can use
  'document.getElementsByClassName(classNames: string)'

*/

document.addEventListener('DOMContentLoaded', ev => {
            // Wait for the DOM to load
    var numberNode = document.getElementById('numberNode');
            // Get the 'numberNode' element
    var n = 0;
    setInterval(() => {
        if (!numberNode) return;
            // If 'numberNode' doesn't exist, stop
        numberNode.innerText = `Started ${n++} seconds ago`;
            // update the 'innerText' of 'numberNode'
    }, 1000);
});