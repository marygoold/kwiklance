document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".register-form");
  const nameInput = document.getElementById("register-name");
  const emailInput = document.getElementById("register-email");
  const passwordInput = document.getElementById("register-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const togglePassButtons = document.querySelectorAll(".toggle-pass");

  togglePassButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const field = btn.closest(".field--password");
      const input = field?.querySelector("input");
      if (!input) return;

      const isPassword = input.getAttribute("type") === "password";
      input.setAttribute("type", isPassword ? "text" : "password");
      btn.classList.toggle("is-visible", isPassword);
      btn.setAttribute("aria-pressed", isPassword ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        isPassword ? "Hide password" : "Show password",
      );
    });
  });

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameVal = nameInput?.value.trim();
      const emailVal = emailInput?.value.trim();
      const passwordVal = passwordInput?.value;
      const confirmPasswordVal = confirmPasswordInput?.value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameVal) {
        alert("Please enter your name.");
        nameInput.focus();
        return;
      }

      if (!emailVal || !emailPattern.test(emailVal)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
      }

      if (!passwordVal) {
        alert("Please enter a password.");
        passwordInput.focus();
        return;
      }

      if (passwordVal.length < 6) {
        alert("Password must be at least 6 characters long.");
        passwordInput.focus();
        return;
      }

      if (passwordVal !== confirmPasswordVal) {
        alert("Passwords do not match.");
        confirmPasswordInput.focus();
        return;
      }

      const submitBtn = registerForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = "<span>Registering...</span>";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert("Registration successful! Redirecting to login...");
        window.location.href = "login.html";
      }, 1500);
    });
  }
});
