let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < medical_supplies_posts.medical_supplies_posts.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let clothing = medical_supplies_posts.medical_supplies_posts[i].device_type;

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

    document.querySelector(
      ".card-select"
    ).innerHTML = `<img src="../image/doctor.jpeg" class="organization-pic header" alt="" />
    <h4 class="title header">${medical_supplies_posts.medical_supplies_posts[id].device_type}</h4>
    <div class="container heading-selected">
        <div class="row">
        <div class="col-md-8"><button onclick=donateButtonClick() class="btn btn-sm delete-btn text" id="2">Donate</button></div>
          </div>
          <div class="input-container">
            <label>Quantity</label>
            <input min="0" id="quantity" type="number"">
        </div>
      </div>
    <p class="text">
    Use : ${medical_supplies_posts.medical_supplies_posts[id].use}
    </p>
    <p class="text">
    Quantity: ${medical_supplies_posts.medical_supplies_posts[id].quantity}
    </p>
    `;
  });
});
