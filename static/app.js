document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde body elementine loaded sınıfını ekle
    document.body.classList.add('loaded');

    // Metin ve container elementlerine fade-in efekti uygula
    animateText('.text-2xl');
    animateText('.text-3xl');
    animateText('.text-lg');
    animateText('.container');
});

function animateText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.classList.add('animate__animated', 'animate__fadeIn');
    });
}
