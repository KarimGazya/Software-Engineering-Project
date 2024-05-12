let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < temp.organizations.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let organizationName = temp.organizations[i].organization_name;

  card.innerHTML = `<img
  src="../image/default.jpg"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${organizationName}</h4>
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
    ).innerHTML = `<img src="../image/default.jpg" class="organization-pic header" alt="" />
    <h4 class="title header">${temp.organizations[id].organization_name}</h4>
    <div class="container heading-selected">
        <div class="row">
        <div class="col-md-8"><button class="btn btn-sm delete-btn text">Accept</button><button class="btn btn-sm delete-btn text">Reject</button></div>
          </div>
      </div>
    <p class="text">
     ${temp.organizations[id].description};
    </p>`;
  });
});
