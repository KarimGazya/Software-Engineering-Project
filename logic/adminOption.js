let Organization=document.querySelector(".Organization");
let Donor=document.querySelector(".Donor");

Organization.addEventListener("click",()=>{
  window.location.replace("../view/manageOrganization.html")
})

Donor.addEventListener("click",()=>{
    window.location.replace("../view/manageDonor.html")
  })