function changeText() {
    const greeting = "Hello, Quahog!";
    const paragraph = document.getElementById("message");
    if (paragraph) {
        paragraph.textContent = greeting;
    }
}

function thefunction() {
    var sentence = "I am Peter Griffin"; sentence += "the village idiot!"; document.getElementById("Concatenate") .innerHTML = sentence;
}