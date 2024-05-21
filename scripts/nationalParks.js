"use strict";


// buttons

const locationDropdownMenu = document.getElementById("locationDropdownMenu");
const parkTypeDropdownMenu = document.getElementById("parkTypeDropdownMenu");

const locationSubmitBtn = document.getElementById("locationSubmitBtn");
const parkTypeSubmitBtn = document.getElementById("parkTypeSubmitBtn");

// text values

const displayData = document.getElementById("displayData");



window.onload = function(){

    console.log("onload");
    loadLocationDropdown();
    loadParkTypeDropdown();
    locationSubmitBtn.onclick = onLocationSubmitBtnClicked;
    parkTypeSubmitBtn.onclick = onParkTypeSubmitBtnClicked;
};



// load dropdowns

function loadLocationDropdown (){

    for (let i = 0; i < locationsArray.length; i++){
        let option = new Option (locationsArray[i], locationsArray[i]);
        locationDropdownMenu.appendChild(option);
    }
};


function loadParkTypeDropdown (){

    for (let i = 0; i < parkTypesArray.length; i++){
        let option = new Option (parkTypesArray[i], parkTypesArray[i]);
        parkTypeDropdownMenu.appendChild(option);
    }
};



// wire submit buttons

function onLocationSubmitBtnClicked (){
    displayLocationData();
    displayParkTypeData();
}


function onParkTypeSubmitBtnClicked (){

}


// display results from dropdowns

function displayLocationData (){
    
    for (let i = 0; i < nationalParksArray.length; i++){
        if (nationalParksArray[i].State == locationDropdownMenu.value){
            displayData.innerHTML = nationalParksArray[i].LocationName
        }
    }
};

//??????????? display parks based on the type given its name
function displayParkTypeData (){

    for (let i = 0; i < parkTypesArray.length; i++){
        if (parkTypesArray[i].LocationName == parkTypeDropdownMenu.value){
            displayData.innerHTML = parkTypesArray[i].LocationName
        }
    }
};