let secretPassword = '';
let guessCount = 0;
const insults = [
    "Seriously? That's your guess? 🤦‍♂️",
    "Do you even have a brain? 🧠💤",
    "You're as cold as a freezer. ❄️",
    "Is guessing this hard for you? 😂",
    "I've seen toddlers do better. 👶"
];

// Function to set the password
function setPassword() {
    secretPassword = document.getElementById('adminPassword').value;
    if (secretPassword) {
        document.getElementById('adminFeedback').innerText = "Password set successfully!";
        document.getElementById('adminPanel').style.display = 'none';
        document.getElementById('gameArea').classList.remove('d-none');
    } else {
        document.getElementById('adminFeedback').innerText = "Please enter a valid password.";
    }
}

// Simulate a guess
function simulateGuess() {
    guessCount++;
    if (guessCount % 5 === 0) {
        giveInsult();
        generateHint();
    }
}

// Generate a random insult
function giveInsult() {
    const insult = insults[Math.floor(Math.random() * insults.length)];
    document.getElementById('insult').innerText = insult;
}

// Generate a hint (placeholder for API integration)
function generateHint() {
    // Placeholder hint logic (can be replaced with an API call)
    const hintText = `Hint: The password has ${secretPassword.length} characters.`;
    document.getElementById('hint').innerText = hintText;
}
