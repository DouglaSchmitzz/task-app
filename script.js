const centrada = document.getElementById("entrada");
const listacontainer = document.getElementById("lista-container");

function addtarefa() {
  if (centrada.value === "") {
    alert("Você precisa adicionar ao menos uma tarefa");
  } else {
    let li = document.createElement("li");
    li.innerHTML = centrada.value;
    listacontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  centrada.value = "";
  salvaDados();
}

listacontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      salvaDados();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      salvaDados();
    }
  },
  false
);

function salvaDados() {
  localStorage.setItem("data", listacontainer.innerHTML);
}

function mostraDados() {
  listacontainer.innerHTML = localStorage.getItem("data");
}
