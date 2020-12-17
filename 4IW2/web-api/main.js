const root = document.getElementById("root");
const table = document.createElement("table");
const tbody = document.createElement("tbody");
var test3;

const data = JSON.parse(locationStorage.getItem("data") || "{}");

const tdListener = (e) => {
  if (e.target.nodeName === "INPUT") return;
  const td = e.currentTarget,
    textNode = td.childNodes[0],
    text = textNode.textContent,
    input = document.createElement("input");
  input.addEventListener("blur", inputListener);
  input.value = text;
  td.replaceChild(input, textNode);
  input.focus();
};

const inputListener = (e) => {
  const input = e.currentTarget,
    text = input.value,
    textNode = document.createTextNode(text),
    td = input.parentNode;

  const rowData = data[td.dataset.row] ?? {};
  rowData[td.dataset.col] = text;
  data[td.dataset.row] = rowData;
  locationStorage.setItem("data", JSON.stringify(data));

  input.removeEventListener("blur", inputListener);
  td.replaceChild(textNode, input);
};

for (let i = 0; i < 4; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");
    td.addEventListener("click", tdListener);
    const textNode = document.createTextNode(data?.[i]?.[j] ?? "default");
    // <=> const textNode = document.createTextNode((data[i] || {})[j] ?? "default");
    td.dataset.row = i;
    td.dataset.col = j;
    td.appendChild(textNode);
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
root.appendChild(table);
