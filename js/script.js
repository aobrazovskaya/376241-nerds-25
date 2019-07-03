var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = form.querySelector("[name=username]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");

var contactus = document.querySelector(".contact-us");

var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("username");
 } catch (err) {
   isStorageSupport = false;
 }

contactus.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    popup.classList.remove("modal-error");

    if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !email.checkValidity() || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести логин и пароль");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", username.value);
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
});
