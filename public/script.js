const baseURL = "https://developer.nps.gov/api/v1/"
const key = "wucuZ5X9C0Up6GwaibbGb0Cbf0lwWrwuMRme0gZd"
let URL;

const submitBtn = document.querySelector('.submit');
const parkImage = document.querySelector('.postcardFront')
const searchForm = document.querySelector('form');

const postcardBack = document.querySelector('.postcardBack')

const activitiesList = document.querySelector('#thingsList');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    console.log(e);
    e.preventDefault();
    url = baseURL + 'parks?' + 'limit=497' + '&api_key=' + key;

    fetch(url)
        .then(res => res.json())
        .then(json => displayParkInfo(json))
}

function displayParkInfo(json) {
    console.log(json);

    const i = Math.floor(Math.random() * 497) + 1

    let img = document.querySelector('.postcardImage');
    img.src = json.data[i].images[0].url;
    console.log(json.data[i].images[0].url)

    let parkNameFront = document.querySelector('.parkNameFront');
    parkNameFront.innerText = json.data[i].name;

    let parkName = document.querySelector('.parkName');
    parkName.innerText = json.data[i].name;
    console.log(json.data[i].name);

    let parkLocation = document.querySelector('.parkLocation');
    parkLocation.innerText = json.data[i].addresses[0].city + ', ' + json.data[i].addresses[0].stateCode;

    let parkWebsite = document.querySelector('.parkWebsite');
    //How to make it a clickable link!//
    parkWebsite.innerHTML = json.data[i].url;
    console.log(json.data[i].url);

    let aboutPark = document.querySelector('.aboutPark');
    aboutPark.innerHTML = json.data[i].description;

    let activities = json.data[i].activities;
    console.log(activities);

    activities.forEach(element => {
        console.log(element.name)
        let activityItem = document.createElement('li');
        activityItem.innerText = element.name;
        activitiesList.appendChild(activityItem);
    })
}