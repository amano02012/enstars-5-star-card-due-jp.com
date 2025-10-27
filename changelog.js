document.querySelectorAll(".changelog-date").forEach(button => {
  button.addEventListener("click", () => {
    const entry = button.parentElement;
    entry.classList.toggle("active");
  });
});