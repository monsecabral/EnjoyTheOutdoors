"use strict";


// buttons

const searchByLocationButton = document.getElementById("searchByLocationButton");
const searchByParkTypeButton = document.getElementById("searchByParkTypeButton");


const submit1Button = document.getElementById("submitBtn1");
const submit2Button = document.getElementById("submitBtn2");


window.onload = init;


function init (){
    searchByLocationButton.onclick = onsearchByLocationButtonClicked;
    searchByParkTypeButton.onclick = onsearchByParkTypeButtonClicked;
}


function onsearchByLocationButtonClicked(){
    locationsArray.forEach(location => {
        let option = document.createElement("option");
        option.value = location;
        option.innerHTML = location;
    })

}

console.log(locationsArray);


function onsearchByParkTypeButtonClicked(){
    //loop park types
}

console.log("good morning");
