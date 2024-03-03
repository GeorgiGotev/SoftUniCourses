function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let inputElement = document.getElementById("searchField");

  function onClick() {
    Array.from(document.querySelectorAll("tbody tr")).forEach((everyRow) => {
      if (
        everyRow.textContent
          .toLowerCase()
          .includes(inputElement.value.toLowerCase())
      ) {
        everyRow.classList.add("select"); // setAttribute("class", select); other option to set attribute
      } else {
        everyRow.classList.remove("select");
      }
    });

    inputElement.value = "";
  }
}
