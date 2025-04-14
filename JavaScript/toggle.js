// a function to enables and disables submit btn based on whether terms checkbox is checked
function toggleSubmit() {
    // get the element by its ID
    const checkbox = document.getElementById("termsCheckbox");
    // enable the submit btn only if the checkbox is checked 
    // if not then disable the btn
    document.getElementById("submitBtn").disabled = !checkbox.checked;
}