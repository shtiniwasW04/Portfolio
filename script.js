document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    if(name === "" ||
       email === "" ||
       message === "")
    {
        alert("Please fill all fields.");
        return;
    }

    document
    .getElementById("successMsg")
    .innerText =
    "Form Submitted Successfully!";

    document
    .getElementById("contactForm")
    .reset();
});

function toggleDarkMode()
{
    document.body.classList.toggle("dark-mode");
}
