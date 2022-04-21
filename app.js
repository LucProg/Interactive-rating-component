const front = document.querySelector('.front');
const back = document.querySelector('.back');
const btn = document.querySelector('.btn');
const rating = document.querySelector('.rating');
const numbers = [...document.querySelectorAll('.numbers__number')];

let number = 0;


numbers.forEach(num => {
    num.addEventListener('click', e => {
        numbers.forEach(e => {
            e.classList.remove('selected');
        });
        e.target.classList.add('selected');
        number = e.target.innerText;
    })
});

function changeState() {
    if (number === 0) {
        alert('Please select a rating')
    } else {
        front.classList.add('hidden');
        back.classList.remove('hidden');
        rating.innerText = number;
    }
}

btn.addEventListener('click', changeState)
