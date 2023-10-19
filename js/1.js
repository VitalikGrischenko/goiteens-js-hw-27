document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector("[data-action='open-modal']");
    const closeButton = document.querySelector("[data-action='close-modal']");
    const backdrop = document.querySelector(".js-backdrop");
    const body = document.body;
  

    openButton.addEventListener("click", function() {
      body.classList.add("show-modal");
    });

    function modalClose() {
      body.classList.remove("show-modal");
    }
  
    closeButton.addEventListener("click", modalClose);

    backdrop.addEventListener("click", function(event) {
      if (event.target === backdrop) {
        modalClose();
      }
    });
  });