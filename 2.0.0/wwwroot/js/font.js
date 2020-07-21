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

fontSize.addEventListener('mouseout', () => {
    document.execCommand('fontSize', TextTrackCue, fontSize.value);
});
