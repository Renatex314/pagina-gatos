const API_URL = 'https://api.thecatapi.com/v1/images/search';

const imageElement = document.querySelector('#image');
const buttonElement = document.querySelector('#button');

function setImage(url){
    imageElement.setAttribute('src', url);
}

async function loadRandomImageLink(){
    try {
        let request = await fetch(API_URL);
        let requestObj = await request.json();

        return requestObj[0].url;
    } catch (e) {
        let erro = new Error(`Erro ao processar a requisição: ${e}`);
        erro.name = 'APIError';

        throw erro;
    }
}

async function updateImage(){
    try {
        let imgLink = await loadRandomImageLink();
        setImage(imgLink);
    } catch (e) {
        alert('erro ao atualizar a imagem, tente novamente');
        throw e;
    }
}

buttonElement.addEventListener('click', () => {
    updateImage();
});

//Carrega a imagem inicial
updateImage();