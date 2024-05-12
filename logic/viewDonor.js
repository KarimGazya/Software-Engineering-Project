let id = null;

let cards = document.querySelector(".cards");

for (let i = 0; i < temp.length; i++) {
  let card = document.createElement("div");

  card.className = "short-card card";
  card.id = `${i}`;
  let donorName = temp[i].first_name + temp[i].last_name;

  card.innerHTML = `<img
  src="../image/default.jpg"
  class="organization-pic header"
  alt=""
  />
  <h4 class="title header">${donorName}</h4>
  <p class="text">
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry.since the 1500s, when an unkno..
  </p>`;
  cards.appendChild(card);
}

const tempWithDescriptions = temp.map(person => {
    let description = `${person.first_name} ${person.last_name} is a ${person.gender.toLowerCase()} ${person.specialty.toLowerCase()} specialist. `;
    description += `They can be reached at ${person.email} or ${person.contact_number}. `;
    description += `Address: ${person.address}, ${person.area}, ${person.governorate}. `;
    description += `They have worked on ${person.pro_bono_cases} pro bono cases, conducted ${person.pro_bono_classes} pro bono classes, and mentored ${person.pro_bono_students} students. `;
    description += `Their subject of expertise is ${person.subject}.`;
    
    return {
        ...person,
        description: description
    };
});



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
    <h4 class="title header">${temp[id].first_name + temp[id].last_name}</h4>
    <div class="container heading-selected">
        <div class="row">
    <p class="text">
     ${tempWithDescriptions[id].description};
    </p>`;
  });
});
