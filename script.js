//Header

//Href for option
function redirectToLink() {
    const select = document.getElementById("services");
    const selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}