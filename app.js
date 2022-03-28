function calculatePrice() {
  const cartItemList = document.querySelectorAll('.cart-item');
  if (cartItemList) {
    for (const cartItem of cartItemList) {
      const minusBtn = cartItem.querySelector('.minus');
      minusBtn.addEventListener('click', () => {
        const priceNow = cartItem.querySelector('.cart-price-now');
        const shipping = document.querySelector('.cart-shipping-cost');
        let shippingCost = Number(shipping.textContent.split('$')[1]);
        let priceNum = Number(priceNow.textContent.split('$')[1]);
        const quantity = cartItem.querySelector('.cart-item-qnt > span');
        let quantityNum = Number(quantity.textContent);
        const totalCost = document.querySelector('.cart-total-cost');
        let newPrice;

        // handle decrease quantity
        quantityNum -= 1;

        // calculate price
        if (quantityNum == 0) {
          newPrice = 0;
        }
        if (quantityNum > 0) {
          newPrice = (priceNum * quantityNum + shippingCost).toFixed(2);
        }

        // update UI
        quantity.textContent = quantityNum;
        totalCost.textContent = `$${newPrice}`;
      });

      const plusBtn = cartItem.querySelector('.plus');
      plusBtn.addEventListener('click', () => {
        const priceNow = cartItem.querySelector('.cart-price-now');
        const shipping = document.querySelector('.cart-shipping-cost');
        let shippingCost = Number(shipping.textContent.split('$')[1]);
        let priceNum = Number(priceNow.textContent.split('$')[1]);
        const quantity = cartItem.querySelector('.cart-item-qnt > span');
        let quantityNum = Number(quantity.textContent);
        const totalCost = document.querySelector('.cart-total-cost');
        let newPrice;

        // handle increase quantity
        quantityNum += 1;

        // calculate price
        newPrice = (priceNum * quantityNum + shippingCost).toFixed(2);

        // update UI
        quantity.textContent = quantityNum;
        totalCost.textContent = `$${newPrice}`;
      });
    }
  }
}

function handleDropdownSelect() {
  const countryModal = document.querySelector('.dropdown-list');
  const countryInput = document.getElementById('country');
  const countryList = document.querySelectorAll('.dropdown-item');
  const dropdownBtn = document.querySelector('.dropdown-select');

  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      // handle click inside dropdown area
      e.stopPropagation();

      countryModal.classList.toggle('show');
    });
  }

  // render country that selected to UI
  for (const country of countryList) {
    country.addEventListener('click', () => {
      countryInput.value = country.textContent;
    });
  }

  // handle click outside the dropdown area
  const body = document.body;
  body.addEventListener('click', (e) => {
    countryModal.classList.remove('show');
  });
}

// MAIN
(() => {
  calculatePrice();
  handleDropdownSelect();
})();
