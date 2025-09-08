function updateAndSort() {
      const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
      const today = new Date(now);

      const container = document.getElementById("idolContainer");
      const cards = Array.from(container.querySelectorAll(".idol-card"));

      
      cards.forEach(card => {
        const startDate = new Date(card.getAttribute("data-start"));
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        card.querySelector(".days").textContent = diffDays >= 0 ? diffDays : 0;
        card.setAttribute("data-days", diffDays >= 0 ? diffDays : 0);
      });

      
      cards.sort((a, b) => b.getAttribute("data-days") - a.getAttribute("data-days"));

      
      container.innerHTML = "";
      cards.forEach(card => container.appendChild(card));
    }

    updateAndSort();
    setInterval(updateAndSort, 1000 * 60 * 60);
