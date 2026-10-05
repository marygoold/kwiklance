document.addEventListener("DOMContentLoaded", () => {
  const forgotForm = document.querySelector(".forgot-form");
  const emailInput = document.getElementById("email");

  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!emailInput || !emailInput.value.trim()) {
        alert("Please enter a valid email address.");
        return;
      }

      // Add your API / send code logic here
      console.log(`Reset code requested for: ${emailInput.value}`);
    });
  }
});
