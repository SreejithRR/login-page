firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        // var uid = user.uid;
        const user = firebase.auth().currentUser;
        if (user != null)
            var email_id = user.email;
        // ...
    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error : invald username or password ")
        });

}
function logout() {
    firebase.auth().signOut();
}