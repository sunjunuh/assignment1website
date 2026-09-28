/* Draggable images */
document.querySelectorAll(".img-box").forEach((box) => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  box.addEventListener("mousedown", (e) => {
    isDragging = true;
    box.classList.add("dragging"); 
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.zIndex = 100;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    box.style.left = (e.clientX - offsetX) + "px";
    box.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    box.classList.remove("dragging");
  });
});



/* Investigate button */
const investigateBtn = document.querySelector(".investigate-btn");
const clueBox = document.querySelector(".clue");

if (investigateBtn && clueBox) {
  investigateBtn.addEventListener("click", () => {
    clueBox.classList.toggle("shown");
    investigateBtn.textContent = clueBox.classList.contains("shown")
      ? "Hide Evidence"
      : "🔎 Investigate";
  });
}

/* Scroll fade-in */
const fadeTargets = document.querySelectorAll(".fade-in");
if (fadeTargets.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  fadeTargets.forEach((el) => observer.observe(el));
}

/* Light / dark mode toggle */

const themeBtn = document.querySelector("#theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    themeBtn.textContent = isDark ? "Night Mode" : "Day Mode";
  });
}

/* Typewriter effect */
const dialogueEl = document.querySelector("#dialogue-text");
if (dialogueEl) {
  const fullText = dialogueEl.dataset.text || "";
  let i = 0;
  const typing = setInterval(() => {
    dialogueEl.textContent = fullText.slice(0, i);
    i++;
    if (i > fullText.length) clearInterval(typing);
  }, 40);
}