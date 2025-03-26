// Liste d'utilisateurs fictifs
const users = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "password" }
];

document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Vérification des identifiants
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        message.style.color = "green";
        message.textContent = "Connexion réussie !";
    } else {
        message.style.color = "red";
        message.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});