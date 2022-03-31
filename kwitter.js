var username = document.getElementById("username"),
loginButton = document.getElementById("login-btn");

username.focus();

loginButton.addEventListener("click", function() {
    var usernameVal = username.value;
    if (!usernameVal) {
        username.placeholder = "Username Required!";
        username.focus();
        username.addEventListener("input", function() {
            username.placeholder = "Enter Username Here...";
            self.close();
        });
    } else {
        localStorage.setItem("username", usernameVal);
        window.location = "kwitter_room.html";
    }
});