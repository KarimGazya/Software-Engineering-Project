let donationRequest=document.querySelector(".donationRequest");
let Fulfilled=document.querySelector(".Fulfilled");

donationRequest.addEventListener("click",()=>{
  window.location.replace("../view/OrganizationCreatePost.html")
})

Fulfilled.addEventListener("click",()=>{
  window.location.replace("../view/fulfill.html");
})