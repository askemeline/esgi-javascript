/**
 * Créer un tableau 4x4 avec default vaue "Test"
 * Si click sur td, transformer le texte en input
 * Si lost focus de l'input, transformer l'input en texte
 */
const root = document.getElementById("root");
const table = document.createElement("table");

const tdListener = (e) => {
  if (e.target.nodeName === "INPUT") return;
  const td = e.currentTarget,
    textNode = td.childNodes[0],
    text = td.textContent,
    input = document.createElement("input");
  input.value = text;
  input.addEventListener("blur", inputListener);
  td.replaceChild(input, textNode);
  input.focus();
};

const inputListener = (e) => {
  const input = e.currentTarget,
    text = input.value,
    textNode = document.createTextNode(text);

  input.removeEventListener("click", inputListener);
  input.parentNode.replaceChild(textNode, input);
};

for (let i = 0; i < 4; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");
    const textNode = document.createTextNode("Test");
    td.addEventListener("click", tdListener);
    td.appendChild(textNode);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

root.appendChild(table);
