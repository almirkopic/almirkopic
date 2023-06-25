var allTotal = 0;

/* adding items to Cart-selecting buttons and selecting to items*/

function addToCart(element) {
    var mainEl = element.closest('.single-item');
    var price = mainEl.querySelector('.price').innerText;
    var name = mainEl.querySelector('h3').innerText;
    var quantity = mainEl.querySelector('input').value;
    var cartItems = document.querySelector('.cart-items');
   /* --------- */

/* if item is already added button=disabled */
    if(parseInt(quantity) > 0) {

        var total = price * quantity;

        price = price.substring(1);
        price = parseInt(price);
/* switch string to int so we can handle  multiplication  */
        var total = price * parseInt(quantity);

       allTotal += total;
        cartItems.innerHTML += `<div class="cart-single-item">   
                                 <h3>${name}</h3>
                                 <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                 <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                 </div>`;
        document.querySelector('.total').innerText = `Total: ${allTotal}`;                         
        
        element.innerText = 'Added';
        element.setAttribute('disabled' , 'true');

    } else {
        alert('Add quantity');
    }
}
/* removing items from cart and enabling ''add button'' if we removed items from card, so we can add items again */
function removeFromCart(element) {
var mainEl = element.closest('.cart-single-item');
var price = mainEl.querySelector('p span').innerText;
var name = mainEl.querySelector('h3').innerText;
let products = document.querySelectorAll('.single-item');
price = parseInt(price);

allTotal -= price;

document.querySelector('.total').innerText = `Total : $${allTotal}`;

mainEl.remove();

products.forEach(function (prod) {
    var itemName = prod.querySelector('.si-content h3').innerText;
/* enabling button */
    if(itemName === name) {
        prod.querySelector('.actions input').value = 0;
        prod.querySelector('.actions button').removeAttribute('disabled');
        prod.querySelector('.actions button').innerText = 'Add';

    }
});

}
