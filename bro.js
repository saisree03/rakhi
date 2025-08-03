const i4 = document.getElementById("i4");
  const bgText = document.getElementById("bg-text");

  i4.addEventListener("mouseenter", () => {
    bgText.classList.add("active");
  });