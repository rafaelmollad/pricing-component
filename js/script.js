// Get price elements
const priceEls = document.querySelectorAll(".card__price");

// Get checkbox element
const checkboxEl = document.querySelector(".toggle__checkbox");

const toggle = (e) => {
  // If checked, show monthly prices
  if (e.target.checked) {
    priceEls[0].textContent = "$5.99";
    priceEls[1].textContent = "$12.99";
    priceEls[2].textContent = "$19.99";
  }
  // else, show annual prices
  else {
    priceEls[0].textContent = "$3.99";
    priceEls[1].textContent = "$6.99";
    priceEls[2].textContent = "$9.99";
  }
};

// Call toggle, everytime the checkbox is checked/unchecked
checkboxEl.onchange = toggle;
