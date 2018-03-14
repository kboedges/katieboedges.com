console.log('Cool');

// Grab the stuff
const portrait = document.querySelector('.landing__portrait');
console.log(portrait);

// Functions
function swingClass(){
    portrait.classList.add("swinging");
}

function removeClass(){
    portrait.classList.remove("swinging");
}

// Event Listeners
portrait.addEventListener('mouseover', swingClass);
portrait.addEventListener('animationend', removeClass);