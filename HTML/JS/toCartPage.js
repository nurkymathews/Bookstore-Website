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
