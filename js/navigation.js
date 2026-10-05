(function () {
  const services = [
    "Graphics & Design",
    "Video & Animation",
    "Music & Audio",
    "Photography & Editing",
    "Writing & Translation",
    "Programming & Tech",
    "Digital Marketing & Media",
    "Personal Growth & Hobbies",
  ];

  const defaultPlaceholder = "what service are you looking for today?";

  let serviceIndex = 0;
  let cycleInterval = null;

  function startCycle(input) {
    if (cycleInterval) clearInterval(cycleInterval);

    serviceIndex = 0;
    input.setAttribute("placeholder", services[serviceIndex]);

    cycleInterval = setInterval(() => {
      serviceIndex = (serviceIndex + 1) % services.length;
      input.setAttribute("placeholder", services[serviceIndex]);
    }, 1500);
  }

  function stopCycle(input) {
    clearInterval(cycleInterval);
    cycleInterval = null;
    input.setAttribute("placeholder", defaultPlaceholder);
  }

  document.addEventListener("mouseover", (e) => {
    const bar = e.target.closest(".search-bar");
    if (!bar) return;
    if (bar.contains(e.relatedTarget)) return; // ignore moves between children

    const input = bar.querySelector("#searchInput");
    if (input) startCycle(input);
  });

  document.addEventListener("mouseout", (e) => {
    const bar = e.target.closest(".search-bar");
    if (!bar) return;
    if (bar.contains(e.relatedTarget)) return;

    const input = bar.querySelector("#searchInput");
    if (input) stopCycle(input);
  });
})();
