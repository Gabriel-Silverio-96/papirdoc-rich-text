//Header Scroll
const header = document.getElementsByTagName('header')[0];

window.addEventListener("scroll", () => {
    let scrollY = this.scrollY;
    
    if(scrollY > 125) {
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
    'selectAll'
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

//Fonts Style
const fontName = document.getElementById('fontName');

//Font List
const fontList = [
    'Arial',
    'Cursive',
    'Impact',
    'Trebuchet MS',
    'Verdana',
    'Helvetica',
    'sans-serif'
];

for (let i of fontList) {
    const option = document.createElement('option');
    option.innerText = i;
    option.value = i;
    option.style.fontFamily = i;
    fontName.appendChild(option);
}

fontName.addEventListener('click', () => {
    document.execCommand('fontName', false, fontName.value);
});

//Font size
const fontSize = document.getElementById('fontSize');
let fontNumber = 1; //Font number start

for (let i = 0; i < 7; i++) {
    const option = document.createElement('option');
    option.innerText = (fontNumber += 1) - 1;
    fontSize.appendChild(option);
};

fontSize.value = 3; //Font size number start

fontSize.addEventListener('mouseout', () =>{
    document.execCommand('fontSize', TextTrackCue, fontSize.value);
});

//Font color
const fontColor = document.getElementById('fontColor');

fontColor.addEventListener('mouseout', () => {
    document.execCommand('foreColor', true, fontColor.value);
});

//Text marker
const textMarker = document.getElementById('textMarker');

textMarker.value = '#ffffff';//Text marker hex start

textMarker.addEventListener('mouseout', () => {
    document.execCommand('hiliteColor', true, textMarker.value);
});

//Add image
const addImage = document.getElementById('addImage');

function imageURL() {
    let url = prompt("Adicione a URL da imagem");
    if (url != null) {
        return url
    }
};

addImage.addEventListener('click', () => {
    document.execCommand('insertImage', false, imageURL());
});