// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

document.addEventListener("DOMContentLoaded", function () {
  const appointmentForm = document.getElementById("appointmentForm");
  const appointmentAlert = document.getElementById("appointmentAlert");

  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form behavior

    // Show the alert properly
    appointmentAlert.classList.remove("d-none");
    appointmentAlert.classList.add("show");

    // Reset the form
    appointmentForm.reset();
  });
});


