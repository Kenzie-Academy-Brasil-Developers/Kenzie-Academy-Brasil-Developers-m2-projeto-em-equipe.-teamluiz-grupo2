function darkMode() {
  let body = document.querySelector("body");
  let buttonChange = document.querySelector("span.mode");
  let iconeDark = "nightlight";
  let iconeLight = "light_mode";
  let thema = "dark-mode";
  let mode = JSON.parse(localStorage.getItem(thema)) || false;
  !mode
    ? (buttonChange.innerText = iconeLight)
    : (body.classList.add(thema), (buttonChange.innerText = iconeDark));
  buttonChange.addEventListener("click", () => {
    !mode
      ? ((mode = !mode), (buttonChange.innerText = iconeDark))
      : ((mode = false), (buttonChange.innerText = iconeLight));
    localStorage.setItem(thema, mode);
    body.classList.toggle(thema);
  });
}

export { darkMode };
