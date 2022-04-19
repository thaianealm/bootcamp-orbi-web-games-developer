const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //para armazenar o endereço da API é comum criar uma constante chamada BASE_URL
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async() => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch(e){
        console.log(e.message);
    }
}

/*Outra sintaxe mesmo resultado
    const getCats = async() => {
        const data = await fetch(BASE_URL);
            .then((res) => res.json())
            .catch((e) => console.log(e));
            return data.webpurl;
}
*/

const loadImg = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();