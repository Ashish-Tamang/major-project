const apiKey = "AIzaSyDySOHPE-95fNrotBKdyv2uDVG2WmoH4Go"; 

function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" || chatBox.style.display === "" ? "block" : "none";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById("chatInput");
    const userMessage = inputField.value.trim();
    if (userMessage === "") return;

    displayMessage(userMessage, "user");
    inputField.value = "";

    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage }] }]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data);
        const aiResponse = data.candidates?.[0]?.content?.parts?.map(part => part.text).join(" ") || "I couldn't understand that.";
        displayMessage(aiResponse, "bot");
    })
    .catch(error => {
        console.error("Error:", error);
        displayMessage("Error connecting to AI service.", "bot");
    });
}

function displayMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
