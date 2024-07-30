const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélection des éléments du DOM
const bannerImg = document.querySelector('.banner-img'); // Sélectionne l'image principale de la bannière
const bannerText = document.querySelector('#banner p'); // Sélectionne le texte de la bannière
const arrowLeft = document.querySelector('.arrow_left'); // Sélectionne le bouton flèche gauche
const arrowRight = document.querySelector('.arrow_right'); // Sélectionne le bouton flèche droite
const dots = document.querySelector('.dots'); // Sélectionne le conteneur des points

let currentIndex = 0; // Index actuel du slide

// Créer des points (dots) pour chaque slide
slides.forEach((_, key) => {
	const dot = document.createElement("div"); // Crée un nouvel élément div pour le point
	dot.classList.add("dot"); // Ajoute la classe 'dot' à l'élément div
	if (key === currentIndex) {
		dot.classList.add("dot_selected"); // Ajoute la classe 'dot_selected' au point correspondant à l'index actuel
	}
	dots.appendChild(dot); // Ajoute le point au conteneur des points
});
const listDots = document.querySelectorAll('.dots .dot'); // Sélectionne tous les points

// Fonction pour mettre à jour la bannière
function updateBanner(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Met à jour la source de l'image
	updateDots(index); // Met à jour les points (dots)
	console.log("Index actuel :", index); // Affiche l'index actuel dans la console
}

// Fonction pour mettre à jour les points (dots)
function updateDots(index) {
	listDots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); // Ajoute la classe 'dot_selected' au point correspondant à l'index
		} else {
			dot.classList.remove('dot_selected'); // Supprime la classe 'dot_selected' des autres points
		}
	});
}

// Écouteurs d'événements pour les flèches de navigation
arrowLeft.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex = currentIndex - 1; // Décrémente l'index si l'index est supérieur à 0
	} else {
		currentIndex = slides.length - 1; // Sinon, revient au dernier slide
	}
	updateBanner(currentIndex); // Met à jour la bannière avec le nouvel index
});

arrowRight.addEventListener('click', () => {
	if (currentIndex < slides.length - 1) {
		currentIndex = currentIndex + 1; // Incrémente l'index si l'index est inférieur au dernier slide
	} else {
		currentIndex = 0; // Sinon, revient au premier slide
	}
	updateBanner(currentIndex); // Met à jour la bannière avec le nouvel index
});

// Initialiser la bannière avec le premier slide
updateBanner(currentIndex); // Affiche le premier slide et met à jour les points