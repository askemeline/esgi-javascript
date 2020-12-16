const root = document.getElementById("root");
const table = document.createElement("table");
const tbody = document.createElement("tbody");

const data = JSON.parse(localStorage.getItem("data") || "{}");

const tdListener = (e) => {
  const td = e.currentTarget,
    textNode = td.childNodes[0],
    input = document.createElement("input");
  if (textNode.nodeName === "INPUT") return;
  input.value = textNode.textContent;
  input.addEventListener("blur", inputListener);
  td.replaceChild(input, textNode);
  input.focus();
};

const inputListener = (e) => {
  const input = e.currentTarget,
    td = input.parentNode,
    text = input.value,
    textNode = document.createTextNode(text);
    
  const iData = data[td.dataset.row] || {};
  iData[td.dataset.col] = text;
  data[td.dataset.row] = iData;

  localStorage.setItem("data", JSON.stringify(data));
  
  input.removeEventListener("blur", inputListener);
  input.parentNode.replaceChild(textNode, input);
};

for (let i = 0; i < 4; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");
    const text = document.createTextNode((data[i] || {})[j] || "init");
    td.dataset.row = i;
    td.dataset.col = j;
    td.addEventListener("click", tdListener);
    td.appendChild(text);
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
root.appendChild(table);
