/*const url = 'https://api.giphy.com/v1/gifs/search';
let busqueda ="?q=";
const key = 'lcZ8FTaaeMfXzig3i7CTUlE88DH7MRWF';
const limite = "&limit=10";

let q = "";

let urlCompleta = "";

urlCompleta = url + busqueda + q + key + limite;

const btn = document.getElementById('btn');

const getData = async () => {

    await fetch(urlCompleta).then((response) => {
        return response.json();
    }).then((giphy) =>{
        console.log(giphy);
    })
}
getData(); */

const url = "https://api.giphy.com/v1/gifs/search";
const key = "&api_key=lcZ8FTaaeMfXzig3i7CTUlE88DH7MRWF";
const limit = "&limit=30";
let search = "?q=";
let q = "";

let urlComp = "";

const btn = document.getElementById('btn');
btn.onclick = () => {
    document.getElementById('portafolio').innerHTML = "";
    document.getElementById('h2').innerHTML="";
    q = document.getElementById('search').value;
    urlComp = url + search + q + key + limit;
    getDataSearch();
}

const btnTrending = document.getElementById('trending');
btnTrending.onclick = () => {
    document.getElementById('portafolio').innerHTML = "";
    getData(); 
}

const getDataSearch = async () => {
    await fetch(urlComp)
        .then((response) => response.json())
        .then((giphy) => {
            console.log(giphy);

            for (let index = 0; index < giphy.data.length; index++) {
                const gif = document.createElement('img');

                gif.src = giphy.data[index].images["original"].url;
                gif.className = "gifs_search";
                document.getElementById("portafolio").appendChild(gif);
            }
        })
        .catch((error) => {
            console.error('Error fetching gifs:', error);
        });
}

const trending = "https://api.giphy.com/v1/gifs/trending?api_key=LFbuRCn1Uo6KEX69wOVNG6yrTx4OzuMY&limit=30";

const getData = async () => {
    await fetch(trending)
        .then((response) => response.json())
        .then((giphy) => {
            console.log(giphy);

            for (let index = 0; index < giphy.data.length; index++) {
                const gif = document.createElement('img');

                gif.src = giphy.data[index].images["original"].url;
                gif.className = "gifs_trending";
                document.getElementById("portafolio").appendChild(gif);
            }
        })
        .catch((error) => {
            console.error('Error fetching:', error);
        });
}

getData();
