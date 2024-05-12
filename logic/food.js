let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < food_item_requests.food_item_requests.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let clothing = food_item_requests.food_item_requests[i].item_name;

  card.innerHTML = `<img
  src="../image/food.jpeg"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${clothing}</h4>
  <p class="text">
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry.since the 1500s, when an unkno..
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
    ).innerHTML = `<img src="../image/food.jpeg" class="organization-pic header" alt="" />
    <h4 class="title header">${food_item_requests.food_item_requests[id].item_name}</h4>
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
     Quantity: ${food_item_requests.food_item_requests[id].quantity_required}
    </p>`;
  });
});
