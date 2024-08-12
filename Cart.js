
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cartItems = [];

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
   
    const category = document.querySelectorAll('.category')[index];
    const categoryName = category.querySelector('.category h3').textContent;
    const categoryPrice = parseFloat(category.querySelector('.price').textContent);

    
    const item = {
      name: categoryName,
      price: categoryPrice,
      quantity: 1
    };

  
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
    
      cartItems[existingItemIndex].quantity++;
    } else {
     
      cartItems.push(item);
    }

  
    updateCartDisplay();
  });
});


function updateCartDisplay() {

  const cartItemsContainer = document.querySelector('.cart-items');
  

 
  cartItemsContainer.innerHTML = '';

  
  let totalPrice = 0;
  let totalQuantity = 0;


  cartItems.forEach((item, index) => {
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

   
    const itemImage = document.createElement('img');
    itemImage.src = 'product-image.jpg';

    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

  
    const itemPrice = document.createElement('p');
    itemPrice.textContent = '$' + item.price.toFixed(2);

    
    const quantitySection = document.createElement('div');
    quantitySection.classList.add('quantity');

    const decrementButton = document.createElement('button');
    decrementButton.classList.add('decrement');
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', () => {
      decreaseQuantity(index);
    });

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = item.quantity;
    quantityInput.min = '1';

    const incrementButton = document.createElement('button');
    incrementButton.classList.add('increment');
    incrementButton.textContent = '+';
    incrementButton.addEventListener('click', () => {
      increaseQuantity(index);
      if(incrementButton > 20){
        const stopAdding = incrementButton;

      }
      

    });

    quantitySection.appendChild(decrementButton);
    quantitySection.appendChild(quantityInput);
    quantitySection.appendChild(incrementButton);
    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(quantitySection);
    cartItemsContainer.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

 
  if (totalPrice > 1000) {
    const discount = totalPrice * 0.1;
    totalPrice -= discount; 
  }

  const totalAmountElement = document.querySelector('#total-amount');
  totalAmountElement.textContent = '$' + totalPrice.toFixed(2);

  const totalQuantityElement = document.querySelector('#total-quantity');
  totalQuantityElement.textContent = totalQuantity;
}

function removeItem(index) {
  cartItems.splice(index, 1); 
  updateCartDisplay(); 
}

function decreaseQuantity(index) {
  const item = cartItems[index];
  if (item.quantity > 1) {
    item.quantity--;
    updateCartDisplay();
  }
}

function increaseQuantity(index) {
  const item = cartItems[index];
  item.quantity++;
  updateCartDisplay();
}

const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
  // Clear the page
  clearPage();
  alert('Thank you for your purchase! We will soon be reviewing your order.');
});

const clearButton1 = document.getElementById('clear-cart');
clearButton1.addEventListener('click', () => {
  clearPage();
  alert('ohhh nooo');
});

function clearPage() {
  cartItems = [];
  updateCartDisplay();
}
updateCartDisplay();
