// add a green boarder to each step card
$("#steps .card").each(function() {
    $(this).css("border", "2px solid #00ff00")
});
// push a new FAQ item to the FAQ Section
$("#faq .list-group").append('<a href="https://www.reddit.com/r/buildapc/comments/s947ea/how_to_take_care_of_your_pc/" class="list-group-item list-group-item-action bg-dark text-white border-light">What is the best way to maintain my PC?</a>');

// insert a note warning the user
$("#steps").prepend('<section id="dynamicSection" class="container content mt-4"><h2>Attention!</h2><p>Keep in mind that it’s impossible to write a perfect step-by-step guide to assembling a PC since there are too many variables at play, especially in case design. As such, some steps may vary slightly when building your own PC, but the bulk of the process should follow these steps. While I’ve attempted to write out the steps, many people find it easier to watch a video of their specific PC being assembled, as seeing it done helps a lot. Once you understand you can close this selection by clicking on the button below</p><button id="remove_section" class="btn btn-danger mt-2">Remove Section</button></section>');
//using $(document).ready(function() ensures the jquery code run only after the whole html are loaded by the browser
$(document).ready(function() {
    $("#dynamicSection h2").css({
        "font-size": "50px",   
        "font-weight": "bold", 
        "color": "red"         
    });
});
// Remove the dynamicSection by added remove section on button click
$(document).on("click", "#remove_section", function() {
    $("#dynamicSection").fadeOut(500, function(){
        $(this).remove();
    });
});