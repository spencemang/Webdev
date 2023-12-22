const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "styles/images/griff1.jpg") {
        myImage.setAttribute("src", "styles/images/lizardsmoke1.jpg");
    } else {
        myImage.setAttribute("src", "styles/images/griff1.jpg");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name:");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName)
    myHeading.textContent = `Its about to get real, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Its about to get real, ${storedName}`;
  }
  


  
myButton.onclick = () => {
    setUserName();
};


