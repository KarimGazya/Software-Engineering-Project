let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < stationary_item_requests.stationary_item_requests.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let clothing = stationary_item_requests.stationary_item_requests[i].item_type;

  card.innerHTML = `<img
  src="../image/pene.png"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${clothing}</h4>
  <p class="text">----------------------------------------------------</p>`;
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
    ).innerHTML = `<img src="../image/pene.png" class="organization-pic header" alt="" />
    <h4 class="title header">${stationary_item_requests.stationary_item_requests[id].item_type}</h4>
    <div class="container heading-selected">
        <div class="row">
        <div class="col-md-8"><button onclick=donateButtonClick() class="btn btn-sm delete-btn text">Donate</button></div>
          </div>
          <div class="input-container">
            <label>Quantity</label>
            <input min="0" id="quantity" type="number"">
        </div>
      </div>
      
    <p class="text">
     Amount Requested: ${stationary_item_requests.stationary_item_requests[id].amount_requested}
    </p>
    `;
  });
});
