function checkPass() {
    var pass = document.getElementById("pass").value.toUpperCase();
    if (pass === "FORT") {
        document.getElementById("hidden-content").style.display = "block";
        document.getElementById("login-box").style.display = "none";
    } else {
        var input = document.getElementById("pass");
        input.style.borderBottomColor = "#ff4444";
        input.value = "";
        input.placeholder = "Try again";
    }
}
