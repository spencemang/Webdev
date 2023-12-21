const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "styles/images/griff1.jpg") {
        myImage.setAttribute("src", "styles/images/lizardsmoke1.jpg");
    } else {
        myImage.setAttribute("src", "styles/images/griff1.jpg");
    }
    
};

