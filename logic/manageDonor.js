let review=document.querySelector(".review");
let view=document.querySelector(".view");

review.addEventListener("click",()=>{
  window.location.replace("../view/reviewOrganization.html");
})

view.addEventListener("click",()=>{
    window.location.replace("../view/viewOrganizationAdmin.html");
  })