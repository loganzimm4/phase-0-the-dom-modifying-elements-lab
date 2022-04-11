// Write your code here!

//Remove Main Element
const main = document.getElementById("main");
main.remove();

// Add New h1 tag with Id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Logan is the champion';
document.body.appendChild(newHeader);
