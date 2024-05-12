console.log("ol");

let food = document.querySelector(".food");
let blood = document.querySelector(".blood");
let toy = document.querySelector(".toy");
let schoolSupplies = document.querySelector(".schoolSupplies");
let clothes = document.querySelector(".clothes");
let medicalSupplies = document.querySelector(".medicalSupplies");
let teachingPost = document.querySelector(".teachingPost");
let medicalCase = document.querySelector(".medicalCase");
let category = document.querySelector(".Organization");

category.addEventListener("click", () => {
  window.location.replace("../view/viewOrganizationDonor.html");
});
toy.addEventListener("click", () => {
  window.location.replace("../view/toy.html");
});

blood.addEventListener("click", () => {
  window.location.replace("../view/blood.html");
});

food.addEventListener("click", () => {
  window.location.replace("../view/food.html");
});

schoolSupplies.addEventListener("click", () => {
  window.location.replace("../view/schoolSupplies.html");
});

clothes.addEventListener("click", () => {
  window.location.replace("../view/clothes.html");
});

medicalSupplies.addEventListener("click", () => {
  window.location.replace("../view/medicalSupplies.html");
});

teachingPost.addEventListener("click", () => {
  window.location.replace("../view/teacher.html");
});

medicalCase.addEventListener("click", () => {
  window.location.replace("../view/medical.html");
});
