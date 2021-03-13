let button = document.querySelectorAll('.key');
function press(e) {
    button.forEach(item => {
        let key = item.getAttribute('data-key');
        if (e.key.toLowerCase() === key.toLowerCase()) {
            item.classList.add('active');
        }
    })
}

function removePress() {
    button.forEach(item => {
        item.classList.remove('active');
    })
}

document.querySelector('.i-11').onkeydown = press;
document.querySelector('.i-11').onkeyup = removePress;