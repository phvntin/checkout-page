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
  handleDropdownSelect();
})();
