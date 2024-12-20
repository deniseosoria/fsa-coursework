console.dir(document);

const userName = "";
const age = 17;

const paragraph = document.querySelector("p");

if(userName){
    paragraph.textContent = "Hello " + userName;
}else{
    paragraph.textContent = "Hello Guest";
}

document.body.bgColor = "pink"

if(age<18){
    const kidMessage = document.createElement("h1");
    kidMessage.textContent = "Go to bed!"
    document.body.appendChild(kidMessage)
}