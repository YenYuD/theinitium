document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".ec-container");
  container.addEventListener("wheel", function (e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY;
  });
});
