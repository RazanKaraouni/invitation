const scene = document.getElementById("scene");
const flowerBtn = document.getElementById("flowerBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const closeInvite = document.getElementById("closeInvite");
const hint = document.getElementById("hint");

function openInvitation() {
  if (
    scene.classList.contains("is-flying") ||
    scene.classList.contains("is-opening") ||
    scene.classList.contains("is-open")
  ) {
    return;
  }

  hint.classList.add("is-hidden");
  scene.classList.add("is-flying");
  flowerBtn.setAttribute("aria-label", "Opening invitation");

  window.setTimeout(() => {
    scene.classList.add("is-opening");
  }, 380);

  window.setTimeout(() => {
    scene.classList.add("is-open");
    letter.removeAttribute("aria-hidden");
    flowerBtn.setAttribute("tabindex", "-1");
  }, 1200);
}

function closeInvitation(event) {
  event.stopPropagation();
  scene.classList.remove("is-open", "is-opening", "is-flying");
  letter.setAttribute("aria-hidden", "true");
  hint.classList.remove("is-hidden");
  flowerBtn.setAttribute("aria-label", "Open the envelope");
  flowerBtn.removeAttribute("tabindex");
  flowerBtn.focus();
}

flowerBtn.addEventListener("click", openInvitation);
envelope.addEventListener("click", openInvitation);
flowerBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});
closeInvite.addEventListener("click", closeInvitation);

if (new URLSearchParams(location.search).has("open")) {
  openInvitation();
}
