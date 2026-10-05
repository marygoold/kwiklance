async function includeHTML(el) {
  const url = el.getAttribute("data-include");
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} responded with ${res.status}`);
    el.outerHTML = await res.text();
  } catch (err) {
    console.error(`include.js: failed to load ${url}`, err);
    el.innerHTML = `<!-- failed to load ${url} -->`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(includeHTML);
});
