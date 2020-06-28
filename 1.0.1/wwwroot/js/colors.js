//Font color
const fontColor = document.getElementById('fontColor');
let fontColorInterval;

fontColor.addEventListener('focus', () => {
    console.log('ON')
    fontColorInterval = setInterval(() => {
        document.execCommand('foreColor', true, fontColor.value);
        console.log(fontColor.value)
    }, 500)
});

fontColor.addEventListener('mouseout', () => {
    setTimeout(() => {
        console.log('STOP')
        clearInterval(fontColorInterval)
    }, 5000)
});

//Text marker
const textMarker = document.getElementById('textMarker');
textMarker.value = '#ffffff';//Text marker hex start

let textMarkerInterval;
textMarker.addEventListener('focus', () => {
    textMarkerInterval = setInterval(() => {
        document.execCommand('hiliteColor', true, textMarker.value);        
    }, 500)
});

textMarker.addEventListener('mouseout', () => {
    setTimeout(() => {        
        clearInterval(textMarkerInterval)
    }, 5000)
});