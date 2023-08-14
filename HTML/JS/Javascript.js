// adding border to nav links on hover

document.querySelector("nav a#border-bottom-1").addEventListener("mouseenter", function (event) {
  const element = document.querySelector("#border-bottom-1");
  element.style.borderBottom = "2px solid #ffa260";
});

document.querySelector("nav a#border-bottom-1").addEventListener("mouseout", function(event) {
  const element = document.querySelector("#border-bottom-1");
  element.style.borderBottom = "none";
});

document.querySelector("nav a#border-bottom-2").addEventListener("mouseenter", function(event) {
  const element = document.querySelector("#border-bottom-2");
  element.style.borderBottom = "2px solid #ffa260";
});

document.querySelector("nav a#border-bottom-2").addEventListener("mouseout", function(event) {
  const element = document.querySelector("#border-bottom-2");
  element.style.borderBottom = "none";
});

document.querySelector("nav a#border-bottom-3").addEventListener("mouseenter", function(event) {
  const element = document.querySelector("#border-bottom-3");
  element.style.borderBottom = "2px solid #ffa260";
});

document.querySelector("nav a#border-bottom-3").addEventListener("mouseout", function(event) {
  const element = document.querySelector("#border-bottom-3");
  element.style.borderBottom = "none";
});

document.querySelector("nav a#id").addEventListener("mouseenter", function(event) {
  const element = document.querySelector("a#id");
  element.style.borderBottom = "2px solid #ffa260";
});

document.querySelector("nav a#id").addEventListener("mouseout", function(event) {
  const element = document.querySelector("a#id");
  element.style.borderBottom = "none";
});

document.querySelector("nav a#cart").addEventListener("mouseenter", function(event) {
  const element = document.querySelector("a#cart");
  element.style.borderBottom = "2px solid #ffa260";
});

document.querySelector("nav a#cart").addEventListener("mouseout", function(event) {
  const element = document.querySelector("a#cart");
  element.style.borderBottom = "none";
});


// adding border to sidebar links on hover
function addBorderStyle(event) {
  const element = document.querySelector(`#${event.target.id}`);
  element.style.borderBottom = "1px solid #ffa260";
  element.style.borderTop = "1px solid #ffa260";
}


function removeBorderStyle(event) {
  const element = document.querySelector(`#${event.target.id}`);
  element.style.borderBottom = "none";
  element.style.borderTop = "none";
}


document.querySelectorAll(".sidebar a").forEach(anchor => {
  anchor.addEventListener("mouseenter", addBorderStyle);
  anchor.addEventListener("mouseout", removeBorderStyle);
});


// Sidebar icon change & sidebar open and close

const element = document.querySelector(".container");
const sidebar = document.querySelector("#sidebar");
var sideNavBar = document.getElementById("sideNavBar");
var nav = document.getElementById("navbar");

let sidebarOpen = true;


function toggleSidebar()
{
        
    // Open the sidebar 
    if (sidebarOpen)
    {
        sidebar.style.left = "0px";
        sideNavBar.style.width = "100%";
        sideNavBar.style.height = "100vh";
        sideNavBar.style.backgroundColor = "#151B29";
    }


    // Close the sidebar 
    else
    {
        sidebar.style.left = "-2000px";
        sideNavBar.style.width = "";
        sideNavBar.style.height = "";
        sideNavBar.style.backgroundColor = "";
    }
    //   Toggle the sidebarOpen variable  
    sidebarOpen = !sidebarOpen;
}

function myFunction() {
    element.classList.toggle("change");
    toggleSidebar();
}




// Function to reset sidebar position when the screen is maximized
window.addEventListener("resize", function resize(){
    if (window.innerWidth >= 800 && window.innerHeight >= 600) 
    {
        // Code here for when the window is back to normal size
        sidebar.style.left = "-2000px";
        sideNavBar.style.width = "";
        sideNavBar.style.height = "";
    }
    
});



document.addEventListener("DOMContentLoaded", function(event)
{
    // Get the mainNavbar element by its ID
    
    // Add a scroll event listener to the document
    document.addEventListener("scroll", function ()
    {
        // Toggle the "scrolled" class based on the scroll position
        if (window.pageYOffset > nav.offsetHeight )
        {
          nav.classList.add("scrolled");
          
          if (sidebarOpen)
          {
            sideNavBar.style.backgroundColor = "whitesmoke";
            sideNavBar.style.transition = "background 500ms";
          }
            
        }
         
        else
        {
            nav.classList.remove("scrolled");
            
            sideNavBar.style.backgroundColor="";
            sideNavBar.style.transition = "";
            
        }
    });
});
  



// Coursel First One

let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slidesPerPage = 5;
let currentPage = 0;

function showSlides(startIndex)
{
    slider.style.transform = `translateX(-${startIndex * 100}%)`;
    slider.style.transition = "transform(0.3s ease)" ;  
}

prevButton.addEventListener('click', function prevSlide()
{
    if (currentPage > 0) {
        currentPage--;
        showSlides(currentPage);
    }
}
); 


nextButton.addEventListener('click', function nextSlide()
{
    if (currentPage < Math.ceil(slides.length / slidesPerPage) - 1)
    {
        currentPage++;
        showSlides(currentPage);
    }
}
);




// Coursel second One

let prevButtonII = document.getElementById("prev");
let nextButtonII = document.getElementById("next");
const sliderII = document.querySelector('.slider-2');
const slidesII = document.querySelectorAll('.slide-2');
const slidesPerPageII = 5;
let currentPageII = 0;

function showSlidesII(startIndexII)
{
  sliderII.style.transform = `translateX(-${startIndexII * 100}%)`;
  sliderII.style.transition = "transform 0.3s ease";
}

prevButtonII.addEventListener('click', function prevSlideII() {
  if (currentPageII > 0) {
    currentPageII--;
    showSlidesII(currentPageII);
  }
});

nextButtonII.addEventListener('click', function nextSlideII() {
  if (currentPageII < Math.ceil(slidesII.length / slidesPerPageII) - 1) {
    currentPageII++;
    showSlidesII(currentPageII);
  }
});
    

  

// Coursel third One

let prevButtonIII = document.getElementById("prev-2");
let nextButtonIII = document.getElementById("next-2");
const sliderIII = document.querySelector('.slider-3');
const slidesIII = document.querySelectorAll('.slide-3');
const slidesPerPageIII = 5;
let currentPageIII = 0;

function showSlidesIII(startIndexIII) {
  sliderIII.style.transform = `translateX(-${startIndexIII * 100}%)`;
  sliderIII.style.transition = "transform 0.3s ease";
}

prevButtonIII.addEventListener('click', function prevSlideIII() {
  if (currentPageIII > 0) {
    currentPageIII--;
    showSlidesIII(currentPageIII);
  }
});

nextButtonIII.addEventListener('click', function nextSlideIII() {
  if (currentPageIII < Math.ceil(slidesIII.length / slidesPerPageIII) - 1) {
    currentPageIII++;
    showSlidesIII(currentPageIII);
  }
});

