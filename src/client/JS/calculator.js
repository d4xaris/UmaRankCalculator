/*Modal (Pop-up window) for choosing an Uma <Katy> */

const umaBtn = document.getElementById("umaBtn");
const umaClose = document.getElementsByClassName("umaClose")[0];
const umaModal = document.getElementById("umaModal");

umaBtn.onclick = function () {
  umaModal.style.display = "block";
  umaBtn.style.color = "red";
};

umaClose.onclick = function () {
  umaModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == umaModal) {
    umaModal.style.display = "none";
  }
};

/* Choosing an image inside the modal + saving it and displaying it on the page --Katy-- */

const Umas = document.querySelectorAll(".uma");
const saveBtn = document.getElementById("saveUmaBtn");
const chosenPreview = document.getElementById("chosenUmaPreview");

let selectedSrc = null;

Umas.forEach((img) => {
  img.addEventListener("click", () => {
    Umas.forEach((i) => i.classList.remove("selected"));
    img.classList.add("selected");

    selectedSrc = img.src;
    saveBtn.disabled = false;
  });
});

saveBtn.addEventListener("click", () => {
  if (!selectedSrc) return;

  chosenPreview.innerHTML = `<img src="${selectedSrc}">`;

  umaModal.style.display = "none";
});
