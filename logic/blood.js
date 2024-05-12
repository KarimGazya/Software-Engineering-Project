let id = null;
console.log(localStorage.getItem("selectedRole"));
let cards = document.querySelector(".cards");

for (
  let i = 0;
  i < blood_donation_requests.blood_donation_requests.length;
  i++
) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let clothing = blood_donation_requests.blood_donation_requests[i].blood_type;

  card.innerHTML = `<img
  src="../image/syringe.png"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${clothing}</h4>
  <p class="text">
  </p>`;
  cards.appendChild(card);
}

let organizationCard = document.querySelectorAll(".short-card");

organizationCard.forEach((o) => {
  o.addEventListener("click", (e) => {
    document.querySelector(".card-select").style.display = "block";
    if (id === null) {
      id = e.currentTarget.id;
      document.getElementById(id).style.border = "2px solid";
      document.getElementById(id).style.borderColor = "#3dcc97";
    } else {
      document.getElementById(id).style.border = "";
      document.getElementById(id).style.borderColor = "";
      id = e.currentTarget.id;
      document.getElementById(id).style.border = "2px solid";
      document.getElementById(id).style.borderColor = "#3dcc97";
      // document.getElementById(id).style.backgroundColor = "#3dcc97";
      // document.getElementById(id).style.color = "#ffffff";
    }

    document.querySelector(
      ".card-select"
    ).innerHTML = `<img src="../image/syringe.png" class="organization-pic header" alt="" />
    <h4 class="title header">${blood_donation_requests.blood_donation_requests[id].blood_type}</h4>
    <div class="container heading-selected">
        <div class="row">
        <div class="col-md-8"><button class="btn btn-sm delete-btn text" onclick=donateButtonClick()>Donate</button></div>
          </div>
      </div>
    <p class="text">
     Hospital Name: ${blood_donation_requests.blood_donation_requests[id].hospital_name};
    </p>
    <p class="text">
     Hospital Area: ${blood_donation_requests.blood_donation_requests[id].hospital_area};
    </p>
    <p class="text">
     Hospital Address: ${blood_donation_requests.blood_donation_requests[id].hospital_address};
    </p>
    <p class="text">
     Governorate: ${blood_donation_requests.blood_donation_requests[id].governorate};
    </p>
    <p class="text">
      Patient Name: ${blood_donation_requests.blood_donation_requests[id].patient_name};
    </p>`;
  });
});
