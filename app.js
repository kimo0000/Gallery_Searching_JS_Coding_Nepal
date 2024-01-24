const searchInput = document.querySelector(".form input"),
  allImg = document.querySelectorAll(".card img");

console.log(searchInput, allImg);

searchInput.addEventListener("keyup", (e) => {
  let searchValue = searchInput.value;
  if (searchValue) {
    allImg.forEach((img) => {
      if (searchValue === img.dataset.name) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  } else {
    allImg.forEach((img) => (img.style.display = "block"));
  }
});
