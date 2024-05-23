"use strict";

// buttons

const mountainDropdownMenu = document.getElementById("mountainDropdownMenu");

const mountainSubmitBtn = document.getElementById("mountainSubmitBtn");

const nameOutputCol = document.getElementById("nameOutputCol");
const elevationOutputCol = document.getElementById("elevationOutputCol");
const coordsOutputCol = document.getElementById("coordsOutputCol");
const descOutputCol = document.getElementById("descOutputCol");



window.onload = function () {
  console.log("onload");
  loadMountainDropdown();

  mountainSubmitBtn.onclick = onMountainSubmitBtnClicked;
};




// load dropdowns

function loadMountainDropdown() {
  for (let i = 0; i < mountainsArray.length; i++) {
    //console.log(i);
    let option = new Option(mountainsArray[i].name, mountainsArray[i].name);
    mountainDropdownMenu.appendChild(option);
  };
};



// wire submit button

function onMountainSubmitBtnClicked() {
  //console.log(mountainDropdownMenu.value);
  displayMountainData();
};



// display results from dropdowns

function displayMountainData() {
  for (let i = 0; i < mountainsArray.length; i++) {
    //console.log("for loop");
    if (mountainsArray[i].name == mountainDropdownMenu.value) {
        console.log(true);
      nameOutputCol.innerHTML = mountainsArray[i].name;      
      elevationOutputCol.innerHTML = mountainsArray[i].elevation;
      coordsOutputCol.innerHTML = mountainsArray[i].coords.lat;
      coordsOutputCol2.innerHTML = mountainsArray[i].coords.lng;
      descOutputCol.innerHTML = mountainsArray[i].desc;
    };
  };
};

