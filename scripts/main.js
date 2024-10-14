const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bacon.jpg") {
        myImage.setAttribute("src", "images/bacon2.jpg");
    }
    else {
        myImage.setAttribute("src", "images/bacon.jpg");
    }
}

// Working with the username
let myHeading = document.querySelector("h1");
function setUsername() {
    let myName;
    while (!myName) {
        myName = prompt("Please enter your name.");   // prompts are able to be null when the user enters nothing
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bacon is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUsername();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bacon is suuuper cool ${storedName}`;
}

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUsername();
};