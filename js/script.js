const typingText = document.querySelector(".typing-text p");
const inputField = document.querySelector(".container .input-field");
const MistakeTag = document.querySelector(".mistake span");
const TimeTag = document.querySelector(".time span b");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");
const tryAgain = document.querySelector("button");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;
function textgenerate(){
    let randIndex = Math.floor(Math.random() * text.length);
    text[randIndex].split("").forEach(span =>{
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });

    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown" , () => inputField.focus());
    typingText.addEventListener("click" , () => inputField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];

if(charIndex < characters.length -1 && timeLeft > 0){
    if(!isTyping){
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
if(typedChar == null){
    charIndex--;
    if(characters[charIndex].classList.contains("incorrect")){
        mistakes--;
    }
    
    characters[charIndex].classList.remove("correct","incorrect");
}
else{
    if(characters[charIndex].innerText === typedChar){
        characters[charIndex].classList.add("correct");
    }
    else{mistakes++;
        characters[charIndex].classList.add("incorrect");
        

    }charIndex++;
}

   
    
    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    let wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm; 
       MistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
    wpmTag.innerText = wpm;
}
else {
    inputField.value = "";
clearInterval(timer);
}

}



   
function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        TimeTag.innerText = timeLeft;
    }
    else{
        clearInterval(timer);
    }
}



function restTest(){
    location.reload();

}
textgenerate();
inputField.addEventListener("input" , initTyping);
tryAgain.addEventListener("click" , restTest);