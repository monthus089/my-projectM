
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


  inputs.forEach(input => {
    input.addEventListener("focus", down);
    input.addEventListener("blur", up);
  });


