const quotes = [
    "First, solve the problem. Then, write the code.",
    "Fix the cause, not the symptom.",
    "Keep calm and debug on.",
    "Eat, Sleep, Code, Repeat.",
    "The best error message is the one that never shows up."
];

const colors = ["#FFDDC1", "#D1E8E2", "#FDE2E4", "#FFFACD", "#E0BBE4", "#C1F0F6"];

function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    const color = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("quoteBtn").displaytext = quote;
    document.getElementById("ProfileCard").style.backgroundColor= color;
    
}