//Header Scroll
const header = document.getElementsByTagName('header')[0];

window.addEventListener("scroll", () => {
    let scrollY = this.scrollY;

    if (scrollY > 125) {
        header.classList.add('header-efect')
    } else if (scrollY == 0) {
        header.classList.remove('header-efect')
    }
});

//Main variables
const btnFunc = document.querySelectorAll('.btnFunc');
const paperContent = document.getElementById('paperContent');

const command = [
    'bold',
    'italic',
    'strikeThrough',
    'justifyLeft',
    'justifyCenter',
    'justifyRight',
    'selectAll',
    'undo',
    'redo'
];

for (let i = 0; i < btnFunc.length; i++) {
    setInterval(() => {
        if (paperContent.textContent.length > 0) {
            btnFunc[i].disabled = false;
        } else {
            btnFunc[i].disabled = true;
        }
    }, 100);

    btnFunc[i].addEventListener('click', () => {
        document.execCommand(command[i]);
        btnFunc[i].classList.toggle('active');

        if (i > 2) {
            setTimeout(() => {
                btnFunc[i].classList.remove('active');
            }, 1000)
        }
    });
};