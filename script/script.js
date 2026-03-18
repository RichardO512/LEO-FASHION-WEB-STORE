document.querySelectorAll(".card").forEach((card) => {
  const sizes = card.querySelectorAll(".size-circle");
  const arrows = card.querySelectorAll(".arrow");
  let currentIndex = -1; // No size selected by default

  // Handle clicking a size circle directly
  sizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      updateActiveSize(index);
    });
  });

  // Handle clicking arrows
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      if (arrow.classList.contains("left")) {
        currentIndex = currentIndex <= 0 ? sizes.length - 1 : currentIndex - 1;
      } else {
        currentIndex = currentIndex >= sizes.length - 1 ? 0 : currentIndex + 1;
      }
      updateActiveSize(currentIndex);
    });
  });

  function updateActiveSize(index) {
    currentIndex = index;
    // Remove 'active' class from all sizes in this specific card
    sizes.forEach((s) => s.classList.remove("active"));
    // Add 'active' class to the chosen size
    sizes[currentIndex].classList.add("active");
  }
});
