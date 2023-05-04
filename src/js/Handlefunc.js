import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface } from "flowbite";
const inputs = document.querySelectorAll(".input");

function down() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function up() {
  let parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", down);
  input.addEventListener("blur", up);
});




// set the dropdown menu element
const $targetEl: HTMLElement = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl: HTMLElement = document.getElementById('dropdownButton');

// options with default values
const options: DropdownOptions = {
  placement: 'bottom',
  triggerType: 'click',
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  onHide: () => {
      console.log('dropdown has been hidden');
  },
  onShow: () => {
      console.log('dropdown has been shown');
  },
  onToggle: () => {
      console.log('dropdown has been toggled');
  }
};

/*
* targetEl: required
* triggerEl: required
* options: optional
*/
const dropdown: DropdownInterface = new Dropdown($targetEl, $triggerEl, options);

// show the dropdown
dropdown.show();