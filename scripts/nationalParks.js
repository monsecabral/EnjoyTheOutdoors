"use strict";


// buttons

const locationDropdownMenu = document.getElementById("locationDropdownMenu");
const parkTypeDropdownMenu = document.getElementById("parkTypeDropdownMenu");

const locationSubmitBtn = document.getElementById("locationSubmitBtn");
const parkTypeSubmitBtn = document.getElementById("parkTypeSubmitBtn");

const outputCol = document.getElementById("outputCol");

// text values (omit)

//const displayData = document.getElementById("displayData");



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
    };
};


function loadParkTypeDropdown (){
    for (let i = 0; i < parkTypesArray.length; i++){
        let option = new Option (parkTypesArray[i], parkTypesArray[i]);
        parkTypeDropdownMenu.appendChild(option);
    };
};



// wire submit buttons

function onLocationSubmitBtnClicked (){
    displayLocationData();
};

function onParkTypeSubmitBtnClicked (){
    displayParkTypeData();
};



// display results from dropdowns

function displayLocationData (){
    outputCol.innerHTML = ""
    for (let i = 0; i < nationalParksArray.length; i++){
        if (nationalParksArray[i].State == locationDropdownMenu.value){
            // displayData.innerHTML = nationalParksArray[i].LocationName
            let address = `${nationalParksArray[i].City}, ${nationalParksArray[i].State}`
            outputCol.appendChild(createCard(nationalParksArray[i].LocationName, address));
        };
    };
};



//nationalParksFormatCards.js follows



// display parks based on the type given its name

function displayParkTypeData (){
    outputCol.innerHTML = ""
    for (let i = 0; i < nationalParksArray.length; i++){
        if (nationalParksArray[i].LocationName.includes(parkTypeDropdownMenu.value) == true){
            console.log("true")
            let address = `${nationalParksArray[i].City}, ${nationalParksArray[i].State}`
            outputCol.appendChild(createCard(nationalParksArray[i].LocationName, address));
        };
    };
};
