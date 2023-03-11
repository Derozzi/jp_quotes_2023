// Get all accordion items
let items = document.querySelectorAll(".accordion-item");

// Loop through the items and add event listeners to the headers
items.forEach(function (item) {
  let header = item.querySelector(".accordion-header");
  header.addEventListener("click", function () {
    // Toggle the "expanded" class on the clicked item
    item.classList.toggle("expanded");
  });
});
