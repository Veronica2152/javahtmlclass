// get the button element
const javaclass=document
nt.getElementById("colorButton")
//add event listener for the button click
javaclass.addEventListener('click', () => {
  // Change the color of the element
  javaclass.style.backgroundColor = javaclass.style.backgroundColor === 'blue' ? '#4CAF50' : 'blue';
});

