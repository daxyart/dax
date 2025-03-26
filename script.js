// Interaction pour le formulaire de contact
document.querySelector("#contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Merci pour votre message !");
});

// Ajouter des animations aux images de la galerie
const images = document.querySelectorAll(".gallery img");
images.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.2s";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
// Animation de défilement fluide entre sections
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Animation de changement de thème
const toggleThemeButton = document.getElementById("toggleThemeButton");
toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Texte dynamique à l'accueil
const introText = document.getElementById("introText");
setTimeout(() => {
    introText.textContent = "Préparez-vous à vivre une aventure inoubliable !";
}, 3000);
// Affichage dynamique des événements
const events = document.querySelector("#events ul");
const eventMessage = document.createElement("p");
eventMessage.textContent = "Cliquez sur un événement pour plus de détails !";
events.appendChild(eventMessage);

events.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        alert(`Vous avez sélectionné : ${e.target.textContent}`);
    }
});

// Témoignages aléatoires
const testimonials = [
    "Daxy's World est une expérience extraordinaire !",
    "Une plateforme qui inspire chaque jour !",
    "Un lieu magique pour les créatifs !"
];
document.addEventListener("DOMContentLoaded", () => {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    const randomTestimonial = testimonials[randomIndex];
    alert(`Témoignage aléatoire : "${randomTestimonial}"`);
});
// Animation au survol des partenaires
const partners = document.querySelectorAll(".partner img");
partners.forEach(partner => {
    partner.addEventListener("mouseover", () => {
        partner.style.transform = "scale(1.1)";
        partner.style.transition = "transform 0.3s";
    });
    partner.addEventListener("mouseout", () => {
        partner.style.transform = "scale(1)";
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    // Récupérer les valeurs des champs
    const name = document.querySelector('input[placeholder="Votre nom"]').value.trim();
    const email = document.querySelector('input[placeholder="Votre email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Votre message"]').value.trim();
    
    // Vérifications simples
    if (name === '') {
        alert('Veuillez entrer votre nom.');
        return;
    }
    if (email === '' || !validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    if (message === '') {
        alert('Veuillez entrer un message.');
        return;
    }

    // Si tout est correct
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
});

// Fonction de validation d'email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}