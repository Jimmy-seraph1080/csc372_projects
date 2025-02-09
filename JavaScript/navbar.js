// use hamburger_icon for getElementById ID
const hamburger_icon = document.getElementById("hamburger_icon");
// using querySelectorAll for menu items
const menu_list_items = document.querySelectorAll("#nav_bar li"); 
const para = document.querySelector(".phrase");
    para.innerHTML = "<p><u>Your trusted partner in PC building and parts</u></p>" ;
// toggle the navigation menu on click
// to do that we use an addEventListener
// an addEventListener method is a function that allows one to attach a handler to an element on a webpage
// the syntax for it element.addEventListener(eventType, function);
// element-> DOM element, eventType -> a string that specifies the type of event you want to listen for
// function -> the code you one wants to run when the event happens
// use an addEventListener with a parameter of click(eventType) and a function that toggles an 
// active class on the navigation menu (nav_menu)-> control visibility of the nav_menu
// in addition it let change selects the class phrase and change the context by giving it an underline
hamburger_icon.addEventListener("click", () => {
    const nav_menu = document.getElementById("nav_bar");
    nav_menu.classList.toggle("active");
});
