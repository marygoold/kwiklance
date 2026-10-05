document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-pass");
  const passInput = document.getElementById("password");

  if (toggleBtn && passInput) {
    toggleBtn.addEventListener("click", () => {
      const showing = passInput.type === "text";
      passInput.type = showing ? "password" : "text";
      toggleBtn.setAttribute("aria-pressed", String(!showing));
      toggleBtn.setAttribute(
        "aria-label",
        showing ? "Show password" : "Hide password",
      );
      toggleBtn.classList.toggle("is-visible", !showing);
    });
  }
});
