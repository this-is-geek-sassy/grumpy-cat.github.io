// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// console.log('6'+'9');

// document.querySelector('html').onclick = function() {
//     alert("Ouch! Stop poking me!");
// }

let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(window.confirm("You wanna see another logo?\nPress \'Ok\' to confirm")) {
        myImg.setAttribute("src", "images/chrome_logo2.png");
        // myImg.style.size = "A5";
    }
    else {
        alert("Okay! Not a problem!!");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1.heading_to_be_modified');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello ' + "<strong>" + myName + ",</strong>" + ' have fun!';
    }
}

// window.onload = setUserName;
function seeIfNameExists() {
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let myName = localStorage.getItem('name');
        myHeading.innerHTML = 'Hello ' + "<strong>" + myName + ",</strong>" + ' have fun!';
    }
}
window.onload = seeIfNameExists;
myButton.onclick = setUserName;