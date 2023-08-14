



let cartItems = [];
document.addEventListener('DOMContentLoaded', function () {
    // Get the cart items from session storage
    cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    // Display the cart items on the cart page
      const cartItemsContainer = document.querySelector('.book');
      cartItems.forEach(item =>
      {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-2'; // Add the class 'item-2' to the main container div
    
        itemDiv.innerHTML = `
        <div class="item">
            <div class="photo">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="photo-side">

                <h2>${item.title}</h2>

            </div>
        </div>
                
                
        <div class="item">
            <div class="quantity">
                <input type="number" name="quantity" min="1" max="10" value="1" />
            </div>
        </div>


        <div class="item">
            <div class="price">      
                    <p><span class="line-through">$ 30.99</span><br>
                    $<span class="ItemPrice">${item.price}</span></p>
            </div>
            <button id = "icon" class="trash">
                <i class='bx bx-trash'  style="font-size: 25px;"></i>
            </button>
        </div> `;
          
        // Append the main container div to the cart items container
        cartItemsContainer.appendChild(itemDiv);
        
      });
    
    
    
});



document.addEventListener('DOMContentLoaded', function () {
    const spanElement = document.getElementById('total');
    const priceDivs = document.querySelectorAll('.ItemPrice');
    const quantityInputs = document.querySelectorAll(' input');
    
    const deleteIcons = document.querySelectorAll('.trash');

    function updateTotal() {
        let totalPrice = 0;
        let price;
        let quantity;
        priceDivs.forEach((itemPrice, index) => {
            price = parseFloat(itemPrice.innerText);
            quantity = parseInt(quantityInputs[index].value);
    
            totalPrice += price * quantity;
        });
    
        spanElement.innerText = totalPrice.toFixed(2);
    }
    updateTotal();
    
    quantityInputs.forEach((input) => {
        input.addEventListener('input', updateTotal);
    });
    
    
    
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', function (event)
        {
            
            // Get the parent container (itemDiv) and remove it from the DOM
            const itemContainer = event.target.closest('.item-2');

            if (itemContainer)
            {
                itemContainer.remove();
                updateTotal();
            }
            
        });
    });
});



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


let items = document.querySelector("#circle")
let count = 0;

function addToCart(bookTitle, imageLink, price)
{   
    count++;

    // Get the current cart items from session storage or create an empty array if none exists
    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
  
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