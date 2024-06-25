// Importa le funzioni necessarie da Vue
const { ref, onMounted, onUnmounted } = Vue;

const app = {
    setup() {

        // Definisci le slide come un array di oggetti
        const slides = ref([
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ]);
        
        // Definisci la slide corrente come un numero
        const currentSlide = ref(0);

        // Definisci autoplay come null
        let autoplay = null;

        // Definisci la funzione nextSlide per andare alla slide successiva
        const nextSlide = () => {
            currentSlide.value = (currentSlide.value + 1) % slides.value.length;
        };

        // Definisci la funzione prevSlide per tornare alla slide precedente
        const prevSlide = () => {
            currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
        };

        // Definisci la funzione startAutoplay per iniziare l'autoplay
        const startAutoplay = () => {
            autoplay = setInterval(nextSlide, 3000);
        };

        // Definisci la funzione stopAutoplay per fermare l'autoplay
        const stopAutoplay = () => {
            clearInterval(autoplay);
        };

        // Quando l'applicazione viene montata, inizia l'autoplay
        onMounted(startAutoplay);
        // Quando l'applicazione viene smontata, ferma l'autoplay
        onUnmounted(stopAutoplay);

        // Restituisci le variabili e le funzioni che vuoi esporre
        return { slides, currentSlide, nextSlide, prevSlide, startAutoplay, stopAutoplay };
    }
};

// Crea l'applicazione Vue e montala sull'elemento con id 'app'
Vue.createApp(app).mount('#app');
