let button = document.querySelector('.burger');

let mobile = document.querySelector('.mobile-menu');

let mark = document.querySelectorAll('.mark');

button.addEventListener('click', function() {
    mobile.classList.remove('d-none');
})

mark.forEach(el => {
    el.addEventListener('click', function() {
        mobile.classList.add('d-none');
    })
})