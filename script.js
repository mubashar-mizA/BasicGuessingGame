console.log(`working for guess!`);

let totalNumOfTries = 4;
let prevGuesses = [];
let numOfTry = 0;

const max = 10;
const min = 1;
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

document.querySelector('#guess-btn').addEventListener('click', () => {

    const userGuess = document.querySelector('#user-guess').value;
    const messageBox = document.querySelector('#result-message-box');
    prevGuesses.push(userGuess) // updated

    // Clear previous message
    messageBox.innerHTML = '';

    if (totalNumOfTries > 0) {
        if (!userGuess) {
            alert('Please enter your guess first!');
        } else if (userGuess == undefined || userGuess == null) {
            alert('Please enter your guess first!');
        } else if(userGuess > 10){
            alert('Please guess the number which ranges from 0 to 10')
        } else if (userGuess == randomNum) {
            numOfTry += 1;
            let messageToUser = document.createElement('p');
            messageToUser.innerHTML = `Congratulations, you guessed it in your ${numOfTry} try.`;
            messageBox.appendChild(messageToUser);
        } else if (userGuess < randomNum) {
            totalNumOfTries -= 1;
            numOfTry += 1;
            let messageToUser = document.createElement('p');
            messageToUser.innerHTML = `Try again, your guess is too low.<br>Your try number is ${numOfTry}.<br>Your previous guesses are ${prevGuesses.join(', ')}.`;
            messageBox.appendChild(messageToUser);
            prevGuesses.push(userGuess);
        } else if (userGuess > randomNum) {
            totalNumOfTries -= 1;
            numOfTry += 1;
            let messageToUser = document.createElement('p');
            messageToUser.innerHTML = `Try again, your guess is too high.<br>Your try number is ${numOfTry}.<br>Your previous guesses are ${prevGuesses.join(', ')}.`;
            messageBox.appendChild(messageToUser);
            prevGuesses.push(userGuess);
        }
    } else {
        alert(`You ran out of tries the number was `);

        let restart = confirm(`Do you want to start again?`);
        if (restart) {
            window.location.reload();
            totalNumOfTries = 5;
            prevGuesses = [];
        }
    }

    console.log(prevGuesses);
});

// Animated scrollbar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((ele) => observer.observe(ele));
