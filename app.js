const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("invalid", handleValidation)
    input.addEventListener("input", handleValidation)
});

function handleValidation(e){
    console.log(e);
}