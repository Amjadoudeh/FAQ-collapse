// TODO: 
// 1- bringing the toggles using querySelectorAll
// 2- looping the toggles using forEach and addEventListener for the toggles when you clicl the Button


const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});
