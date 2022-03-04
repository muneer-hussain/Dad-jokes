let joke = document.getElementById("jokes")
let jokeBtn = document.getElementById("btn-joke");


jokeBtn.addEventListener("click", function() {
    fetch("//icanhazdadjoke.com/slack").then(res => res.json()).then(result => {
        joke.innerText = result.attachments[0].text
    })
})