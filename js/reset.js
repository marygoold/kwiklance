document.addEventListener("DOMContentLoaded", () => {
  const resetForm = document.querySelector(".reset-form");
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

  if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const resetCodeInput = document.getElementById("reset-code");
      const newPasswordInput = document.getElementById("new-password");
      const confirmPasswordInput = document.getElementById("confirm-password");

      const resetCodeVal = resetCodeInput?.value.trim();
      const newPasswordVal = newPasswordInput?.value;
      const confirmPasswordVal = confirmPasswordInput?.value;

      if (!resetCodeVal) {
        alert("Please enter your reset code.");
        resetCodeInput?.focus();
        return;
      }

      if (!newPasswordVal) {
        alert("Please enter a new password.");
        newPasswordInput?.focus();
        return;
      }

      if (newPasswordVal.length < 6) {
        alert("Password must be at least 6 characters long.");
        newPasswordInput?.focus();
        return;
      }

      if (newPasswordVal !== confirmPasswordVal) {
        alert("Passwords do not match.");
        confirmPasswordInput?.focus();
        return;
      }

      const submitBtn = resetForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = "<span>Resetting...</span>";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert("Password reset successfully! Redirecting to login...");
        window.location.href = "login.html";
      }, 1500);
    });
  }
});
