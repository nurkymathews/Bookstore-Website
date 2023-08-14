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
  





// Function to load the books
let productItems = [];

document.addEventListener('DOMContentLoaded', function() {
    // Get the cart items from session storage
    productItems = JSON.parse(sessionStorage.getItem('product')) || [];
    
    // Display the cart items on the cart page
      const productItemsContainer = document.querySelector('body');
      productItems.forEach(item =>
      {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'card'; // Add the class 'item-2' to the main container div
    
        itemDiv.innerHTML = `
            <div class="photo">
                <img src="${item.image}" alt="">
            </div>
            <div class="card-side">
                <div class="text space">
                    <h2>${item.title}</h2>
                    <h3>${item.author} (Author)</h3>
                    <div class="move">
                        
                        <p><span id="h1">$ 20.99</span><span id="h4"> |$ ${item.price} .</span> </p>
                        <div class="button">
                            <a href="order" id="addToCartLink">Add to Cart</a>
                        </div>
                    </div>
                    

                </div>
                <div class="text">
                    <h2>Description</h2>
                    <h3>${item.title} is the story of a 
                    dramatic year in Virginia's Roanoke Valley.
                    Annie Dillard sets out to see what she can
                    see. What she sees are astonishing incidents
                    of "beauty tangled in a rapture with violence."
                    Her personal narrative highlights one year's
                    exploration on foot in the Virginia region through
                    which Tinker Creek runs. In the summer, Dillard stalks
                    muskrats in the creek and contemplates wave mechanics;
                    in the fall, she watches a monarch butterfly migration 
                    and dreams of Arctic caribou. She tries to con a coot; 
                    she collects pond water and examines it under a microscope. 
                    She unties a snake skin, witnesses a flood, and plays King 
                    of the Meadow with a field of grasshoppers. The result 
                    is an exhilarating tale of nature and its seasons.</h3>
                </div>
                <div class="text">
                    <h2>Product Details</h2>
                    <h3>Publisher: Perfection Learning <br>
                        Publish Date: September 10, 2013 <br>
                        Pages: 290 <br>
                        Language: English <br>
                    </h3>
                </div>
            </div>`;
            // Append the main container div to the cart items container
            productItemsContainer.appendChild(itemDiv);
    });
  });
  


// Add to the cart function is executed over here
document.addEventListener('DOMContentLoaded', function ()
{
    const addToCartLink = document.getElementById('addToCartLink');
    addToCartLink.addEventListener('click', addToCartHandler);

    function addToCartHandler(event) {
        event.preventDefault();
        const bookTitle = productItems[0].title;
        const imageLink = productItems[0].image;
        const price = productItems[0].price;

        addToCart(bookTitle, imageLink, price);
    }
});









//Clearing the adder div on the page for the product  

window.addEventListener('beforeunload', () =>
{
    // Clear the array from session storage
    sessionStorage.removeItem('product');
  
    // Clear the div content 
    const divElement = document.getElementsByClassName('card');
    if (divElement)
    {
        divElement.innerHTML = '';
    }
});
  




// Sending information to cart page
let items = document.querySelector("#circle")
let count = 0;

function addToCart(bookTitle, imageLink, price)
{   
    count++;

    // Get the current cart items from session storage or create an empty array if none exists
    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
  
    // Add the new item to the cart array with the image link
    cartItems.push({ title: bookTitle, image: imageLink, price: price });
  
    // Save the updated cart array back to session storage
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  
    // Optionally, provide some feedback to the user, like displaying a message or updating the cart icon
    items.classList = "circle";
    items.innerHTML = `${cartItems.length}`;

}

if (sessionStorage.getItem('cart'))
{
    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    items.classList = "circle";
    items.innerHTML = `${cartItems.length}`;
}  
  