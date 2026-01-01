/* HERO SLIDER */
const heroImages = [
  "assets/images/hero-1.jpg",
  "assets/images/hero-2.jpg",
  "assets/images/hero-3.jpg"
];

let current = 0;
const hero = document.querySelector(".hero");

function changeHero() {
  hero.style.backgroundImage = `url(${heroImages[current]})`;
  current = (current + 1) % heroImages.length;
}

changeHero();
setInterval(changeHero, 4000);

/* CONTACT FORM → WHATSAPP */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const project = document.getElementById("project").value;
  const message = document.getElementById("message").value;

  const phone = "91XXXXXXXXXX"; // replace with your number

  const text = `Hello K2 Interiors,%0A
Name: ${name}%0A
Project Type: ${project}%0A
Details: ${message}`;

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});

