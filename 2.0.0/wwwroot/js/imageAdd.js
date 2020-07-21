//Image add
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