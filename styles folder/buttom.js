(function () {
  let CapturaEmail = document.getElementById("get-email");
  let expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let input = document.querySelectorAll("#get-email input");

  const validarEmail = (e) => {
    if (expresionEmail.test(e.target.value) || e.target.value === "") {
      document.querySelector("input").classList.remove("error-activo");
      document.getElementsByClassName("msj-error")[0].style.opacity = 0;
      document.getElementById("icon-error").style.opacity = 0;
    } else {
      document.getElementsByClassName("msj-error")[0].style.opacity = 1;
      document.getElementById("icon-error").style.opacity = 1;
      document.querySelector("input").classList.add("error-activo");
    }
  };

  input.forEach((input) => {
    input.addEventListener("keyup", validarEmail);
    input.addEventListener("blur", validarEmail);
  });

  CapturaEmail.addEventListener("submit", (e) => {
    e.preventDefault();
  });
})();
