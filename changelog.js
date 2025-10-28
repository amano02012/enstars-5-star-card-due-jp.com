document.querySelectorAll(".changelog-date").forEach(button => {
  button.addEventListener("click", () => {
    const entry = button.parentElement;
    const content = entry.querySelector(".changelog-content");

    if (entry.classList.contains("active")) {
      content.style.maxHeight = null;
      entry.classList.remove("active");
    } else {
      document.querySelectorAll(".changelog-entry.active").forEach(openEntry => {
        openEntry.classList.remove("active");
        openEntry.querySelector(".changelog-content").style.maxHeight = null;
      });

      entry.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px"; 
    }
  });
});
