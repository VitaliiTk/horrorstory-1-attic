const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    activatePlay()
})

function activatePlay() {
    wrapper.classList.toggle('active');
    body.classList.toggle('active');
}