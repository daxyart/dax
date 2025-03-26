document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Validation personnalisée (ajoutez des vérifications supplémentaires si nécessaire)
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    if (!lastName || !email) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    // Affiche un message de confirmation (remplacez par une logique réelle si besoin)
    document.getElementById('successMessage').style.display = 'block';
    this.reset(); // Réinitialise le formulaire
});