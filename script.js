const indicator = document.querySelector(".indicator");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");

const input = document.querySelector("input");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");

let regExpWeak = /[a-z]/;
let regExpMedium = /[0-9]/;
let regExpStrong = /.[!,@,#,$,%,^,&,_,?,*,~,(,)]/;

function trigger() {
  if (input.value != "") {
    let no = 0;
    let a = 0;
    let b = 0;
    let c = 0;

    indicator.style.display = "block";
    indicator.style.display = "flex";
    text.style.display = "block";

    if (input.value.length >= 6 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) a = 1;
    if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)))) b = 2;
    if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) c = 3;

    if (no === 0) {
      text.textContent = "Need more symbols";
    }
    if (a === 1) {
      weak.classList.add("active");
      text.textContent = "Your password is too weak";
      text.classList.add("weak");
    } else {
      weak.classList.remove("active");
      text.classList.remove("weak");
    }
    if (b === 2) {
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    } else {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if (c === 3) {
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function () {
      if (input.type === "password") {
        input.type = "text";
        showBtn.textContent = "show";
      } else {
        input.type = "password";
        showBtn.textContent = "hide";
      }
    }
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}