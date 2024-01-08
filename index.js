// to hide notification bar when cross is clicked
const notifiBar = document.querySelector(".notificationBar");
function handleHide() {
  notifiBar.style.display = "none";
}

const labLink = document.querySelector("#labTag");
const labContainer = document.querySelector(".mainLabContainer" );

labLink.addEventListener("mouseover", () => {
  labContainer.classList.add("active")
} )

labLink.addEventListener("mouseout", () => {
  labContainer.classList.remove("active")
} )
