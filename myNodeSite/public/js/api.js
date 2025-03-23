// wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // get the respective DOM elements
  const chatbot_container = document.getElementById("chatbot-container");
  const icon = document.getElementById("chatbot-icon");
  const close_Btn = document.getElementById("close-btn");
  const send_Btn = document.getElementById("send-btn");
  const chatbot_input = document.getElementById("chatbot-input");
  const chatbot_messages = document.getElementById("chatbot-messages");
  // open ai KEY 
  // note to advice leaking the api key i will manually post upload the api.js to cpanel will this file up
  // on github  will have a faulty key
  const API_KEY = "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";
  // openAI API endpoint
  const API_URL = "https://api.openai.com/v1/chat/completions";
  // create a variable for greating and will take in false
  let greet = false;
  // chat icon click handler
  icon.addEventListener("click", function () {
    // show chat container and hide chat icon
    chatbot_container.style.display = "block";
    icon.style.display = "none";
    // show greeting message only once
    if (!greet) {
      append_message("bot", "Hello! How can I assist you today?");
      // update greet to true
      greet = true;
    }
  });
  // close button click event handler
  close_Btn.addEventListener("click", function () {
    // hide chat container and show chat icon
    chatbot_container.style.display = "none";
    icon.style.display = "block";
  });
  // close button click event handler
  send_Btn.addEventListener("click", send_message);
  // use event handler when user hit enter
  chatbot_input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      send_message();
    }
  });
  // a function to handle message sending
  function send_message() {
        // get and clean the input
    const user_message = chatbot_input.value.trim();
    // only proceed if message exists
    if (user_message) {
      // display user message
      append_message("user", user_message);
      // clear input field
      chatbot_input.value = "";
      // get AI response
      bot_response(user_message);
    }
  }
  // display message in chat
  function append_message(sender, message) {
    const message_element = document.createElement("div");
    // add css classes
    message_element.classList.add("message", sender);
    // set message content
    message_element.textContent = message;
    // add to chat container
    chatbot_messages.appendChild(message_element);
    // add auto scoll wheel
    chatbot_messages.scrollTop = chatbot_messages.scrollHeight;
  }
  // get ai response from openai api
  async function bot_response(user_message) {
    try {
      // api configuration where  it is ask to keep everything on the topic on pc
      const response = await fetch(API_URL, {
        // the method - post
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization using the key
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          // model
          model: "gpt-4o-mini",
          // the message and persona
          messages: [
            { role: "system", content: "You are a PC part compatibility assistant. Your job is to help users find the best and most compatible PC parts for their build. Only provide answers related to PC building, part recommendations, and compatibility. If a user asks something else, guide them back to PC-related topics." },
            { role: "user", content: user_message }
          ],
          // the max letters in a reponse
          max_tokens: 150,
        })
      });
      // parse json response
      const data = await response.json();
      // display ai response
      append_message("bot", data.choices[0].message.content);
    } // if there is an error display respective error
    catch (error) {
      console.error("Error fetching bot response:", error);
      append_message("bot", "Sorry, something went wrong. Please try again.");
    }
  }
});