document.addEventListener("DOMContentLoaded", function() {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const targetPage = this.dataset.target;
      window.location.href = targetPage;
    });
  });
});