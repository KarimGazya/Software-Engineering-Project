let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < medical_cases.medical_cases.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let clothing = medical_cases.medical_cases[i].patient_name;

  card.innerHTML = `<img
  src="../image/doctor.jpeg"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${clothing}</h4>
  <p class="text">
  ----------------------------------------------------
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

    let button;

    if (localStorage.getItem("selectedRole") !== "doctor") {
      button = `<button class="btn btn-sm delete-btn text" id="2" disabled>Fulfill</button>`;
    } else {
      button = `<button class="btn btn-sm delete-btn text" id="2" >Fulfill</button>`;
    }

    document.querySelector(
      ".card-select"
    ).innerHTML = `<img src="../image/doctor.jpeg" class="organization-pic header" alt="" />
    <h4 class="title header">${medical_cases.medical_cases[id].patient_name}</h4>
    <div class="container heading-selected">
        <div class="row">
        <div class="col-md-8">${button}</div>
          </div>
      </div>
    <p class="text">
    Medical Specialty: ${medical_cases.medical_cases[id].medical_specialty}
    </p>
    <p class="text">
    Age: ${medical_cases.medical_cases[id].age}
    </p>
    <p class="text">
    Weight: ${medical_cases.medical_cases[id].weight}
    </p>
    <p class="text">
    Gender: ${medical_cases.medical_cases[id].gender}
    </p>
    <p class="text">
    Organization Name: ${medical_cases.medical_cases[id].organization_name}
    </p>
    <p class="text">
    Address: ${medical_cases.medical_cases[id].address}
    </p>
    <p class="text">
    Case Description: ${medical_cases.medical_cases[id].case_description}
    </p>
    <p><a href="../view/Map.html">View on Map</a></p>`;
  });
});
