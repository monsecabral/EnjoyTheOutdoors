"use strict";


// buttons

const mountainDropdownMenu = document.getElementById("mountainDropdownMenu");

const mountainSubmitBtn = document.getElementById("mountainSubmitBtn");



window.onload = function(){
    console.log("onload");
    loadMountainDropdown();
}



// load dropdowns

function loadMountainDropdown (){
    
    for (let i = 0; i < mountainsArray.length; i++){
        console.log(i);
        let option = new Option (mountainsArray[i].name, mountainsArray[i].name);
        mountainDropdownMenu.appendChild(option);
    }
}