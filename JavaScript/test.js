document.addEventListener("DOMContentLoaded", function () {
    const chatbot_container = document.getElementById("chatbot-container");
    const chatbot_icon = document.getElementById("chatbot-icon");
    const close_btn = document.getElementById("close-btn");
    const send_btn = document.getElementById("send-btn");
    const chatbot_input = document.getElementById("chatbot-input");
    const chatbot_messages = document.getElementById("chatbot-messages");

    let greet = false; // Prevent multiple greetings

    // Show chatbot when clicking the icon
    chatbot_icon.addEventListener("click", function () {
        chatbot_container.classList.remove("hidden");
        chatbot_icon.style.display = "none"; // Hide chat icon

        // Send a greeting message only once
        if (!greet) {
            append_message("bot", "Hello! How can I assist you today?");
            greet = true;
        }
    });

    // Close chatbot when clicking the close button
    close_btn.addEventListener("click", function () {
        chatbot_container.classList.add("hidden");
        chatbot_icon.style.display = "flex"; // Show chat icon again
    });

    // Send message when clicking send or pressing Enter
    send_btn.addEventListener("click", send_message);
    chatbot_input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            send_message();
        }
    });

    function send_message() {
        const user_message = chatbot_input.value.trim();
        if (user_message) {
            append_message("user", user_message);
            chatbot_input.value = "";
            get_bot_response(user_message);
        }
    }

    function append_message(sender, message) {
        const message_element = document.createElement("div");
        message_element.classList.add("message", sender);
        message_element.textContent = message;
        chatbot_messages.appendChild(message_element);
        chatbot_messages.scrollTop = chatbot_messages.scrollHeight;
    }

    async function get_bot_response(user_message) {
        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: user_message }),
            });

            const data = await response.json();
            append_message("bot", data.response);
        } 
        catch(error) {
            console.error("Error fetching bot response:", error);
            append_message("bot", "Sorry, something went wrong. Please try again.");
        }
    }
});