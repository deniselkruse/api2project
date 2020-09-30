const baseURL = "https://developer.nps.gov/api/v1/"
const key = "wucuZ5X9C0Up6GwaibbGb0Cbf0lwWrwuMRme0gZd"
let URL;

const submitBtn = document.querySelector('.submit');
const parkImage = document.querySelector('.postcardFront')
const searchForm = document.querySelector('form');

const postcardBack = document.querySelector('.postcardBack')

const activitiesList = document.querySelector('.thingsList');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    console.log(e);
    e.preventDefault();
    url = baseURL + 'parks?' + 'limit=1' + '&api_key=' + key;
    //How to Make it a Random Park?//
    fetch(url)
        .then(res => res.json())
        .then(json => displayParkInfo(json))
}

function displayParkInfo(json) {
    console.log(json);
    while (displayParkInfo.firstChild) {
        displayParkInfo.removeChild(displayParkInfo.firstChild);
    }

    for (let i = 0; i < displayParkInfo.length; i++) {

        let img = document.querySelector('.postcardImage'); // 
        img.src = json.data[0].images[0].url;
        console.log(json.data[0].images[0].url)

        let parkNameFront = document.querySelector('.parkNameFront');
        parkNameFront.innerText = json.data[0].name;

        let parkName = document.querySelector('.parkName');
        parkName.innerText = json.data[0].name;
        console.log(json.data[0].name);

        let parkLocation = document.querySelector('.parkLocation');
        parkLocation.innerText = json.data[0].addresses[i].city + ', ' + json.data[0].addresses[i].stateCode;

        let parkWebsite = document.querySelector('.parkWebsite');
        //figure out how to make it a clickable link!//
        parkWebsite.innerHTML = json.data[0].url;
        console.log(json.data[0].url);

        let aboutPark = document.querySelector('.aboutPark');
        aboutPark.innerHTML = json.data[0].description;


        let activityItem = document.createElement('li');
        activityItem.innerText = json.data[0].activities[0];
        activitiesList.appendChild(activityItem);
        //List is not working//
    }
}