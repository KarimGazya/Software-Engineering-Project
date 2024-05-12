let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < teaching_posts.teaching_posts.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let posts = teaching_posts.teaching_posts[i].subjects_to_teach;

  card.innerHTML = `<img
  src="../image/teacher.png"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${posts}</h4>`;
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
    }
    let button;

    if (localStorage.getItem("selectedRole") !== "teacher") {
      button = `<button class="btn btn-sm delete-btn text" id="2" disabled>Fulfill</button>`;
    } else {
      button = `<button class="btn btn-sm delete-btn text" id="2" >Fulfill</button>`;
    }

    document.querySelector(
      ".card-select"
    ).innerHTML = `<img src="../image/teacher.png" class="organization-pic header" alt="" />
    <h4 class="title header">${teaching_posts.teaching_posts[id].subjects_to_teach}</h4>
    <div class="container heading-selected">
        <div class="row">
        <div class="col-md-8">${button}</div>
          </div>
      </div>
    <p class="text">
     Number of Students: ${teaching_posts.teaching_posts[id].number_of_students};
    </p>
    <p>Address : ${teaching_posts.teaching_posts[id].address};</p>
    <p><a href="../view/Map.html">View on Map</a></p>`;
  });
});
