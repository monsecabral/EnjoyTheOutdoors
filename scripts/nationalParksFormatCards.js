"use strict";

/*
                <div class="card parkcard">
                    <div class="card-body">
                        <h5 class="card-title">
                            Abraham Lincoln Birthplace National Historical Park
                        </h5>
                        <p class="card-text">
                            <p class="cardLocation">
                                Hodgenville, Kentucky
                            </p>
                        </p>
                    </div>
                </div>
*/

function createCard (title, location){
    let parkListCard = document.createElement("div");
    parkListCard.classList.add("card", "parkcard");

    let parkCardBody = document.createElement("div");
    parkCardBody.classList.add("card-body");

    parkListCard.appendChild(parkCardBody);

    let parkCardTitle = document.createElement("h5");
    parkCardTitle.classList.add("card-title");

    parkCardBody.appendChild(parkCardTitle);

 

    let parkCardText = document.createElement("p");
    parkCardText.classList.add("card-text");

    parkCardBody.appendChild(parkCardText);

    let parkCardLocation = document.createElement("p");
    parkCardLocation.classList.add("cardLocation");

    parkCardText.appendChild(parkCardLocation);


    parkCardTitle.innerHTML = title;

    parkCardLocation.innerHTML = location;

    return parkListCard;
}

