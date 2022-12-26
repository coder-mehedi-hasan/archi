let navMenu = document.getElementById('nav_menu')
let nav_toggle = document.getElementById('nav_toggle')
// nav bar toggle 
nav_toggle.addEventListener('click',function(){
    hideShowToggle(navMenu);
})

function hideShowToggle(element){
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


// service slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

// oroject counter 
let apptens = document.getElementById('projectCount');
let Interval;
let tens = 00;
window.onload = ()=>{
  Interval = setInterval(timestart,50);
}
function timestart() {
  tens++;
  if( tens <= 685 )   {
    apptens.innerHTML = tens;
  }
}

// img popup
let service_itemOne = document.getElementById('service_itemOne');
let service_itemTwo = document.getElementById('service_itemTwo');
let service_itemThree = document.getElementById('service_itemThree');

imgPopUp(service_itemOne,'../images/c1.jpg');
imgPopUp(service_itemTwo,'../images/c2.jpg');
imgPopUp(service_itemThree,'../images/c3.jpg');



function imgPopUp(item,imgLink){
  item.onclick=()=>{}
  let header = document.getElementById('nav_bar') 
  item.addEventListener('click',function(){
    let div = document.createElement('div');
    div.classList.add('imgPopup');
    div.innerHTML=`
    <div class="container">
    <div class="main">
    <div class="img">
    <img src=${imgLink} alt="service">
    </div>
    </div>
    </div>
    
    `
    if(item.onclick){
      header.appendChild(div)
      if(header.appendChild(div)){
        div.addEventListener('click',function(){
          header.removeChild(div)
        })
      }
    }
  }) 
}