function addToProduct(bookTitle, imageLink, price, bookAuthor)
{   
    

    // Get the current cart items from session storage or create an empty array if none exists
    let productItems = JSON.parse(sessionStorage.getItem('product')) || [];
  
    // Add the new item to the cart array with the image link
    productItems.push({ title: bookTitle, image: imageLink, price: price, author: bookAuthor });
  
    // Save the updated cart array back to session storage
    sessionStorage.setItem('product', JSON.stringify(productItems));
  
    
}