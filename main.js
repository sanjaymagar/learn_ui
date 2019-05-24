const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', () => {
    if (wrapper.classList.contains('medium')) {
        wrapper.classList.replace('medium', 'small');
    } else if (wrapper.classList.contains('small')) {
        wrapper.classList.remove('small');
    } else {
        wrapper.classList.add('medium');
    }
});