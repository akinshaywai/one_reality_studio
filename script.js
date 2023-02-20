const joinButton = document.querySelector(".join");
const emailList = document.querySelector(".email-list");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const email = document.querySelector("#email");

joinButton.addEventListener("click", () => {
  if (email.value !== "") {
    emailList.style.visibility = "visible";
    emailList.style.zIndex = "999";
    modal.classList.add("transition");

    close.addEventListener("click", () => {
      emailList.style.visibility = "hidden";
      emailList.style.zIndex = "-1";
      modal.classList.remove("transition");
    });
  }
});
