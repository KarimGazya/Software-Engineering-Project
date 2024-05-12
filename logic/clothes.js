let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < clothes.clothes.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let clothing = clothes.clothes[i].clothing;

  card.innerHTML = `<img
  src="../image/clothes.png"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${clothing}</h4>
  <p class="text"></p>`;
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
    ).innerHTML = `<img src="../image/clothes.png" class="organization-pic header" alt="" />
    <h4 class="title header">${clothes.clothes[id].clothing}</h4>
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
     ${clothes.clothes[id].clothing}
    </p>
    <p class="text">
     Age: ${clothes.clothes[id].age}
    </p>
    <p class="text">
     Gender: ${clothes.clothes[id].gender}
    </p>
    <p class="text">
     Quantity: ${clothes.clothes[id].quantity_requested}
    </p>
    <p class="text">
     Material: ${clothes.clothes[id].material}
    </p>
    <p class="text">
     ${clothes.clothes[id].description}
    </p>`;
  });
});
