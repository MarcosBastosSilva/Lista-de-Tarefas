let contador = 0 
let itens = []
let input = document.getElementById("inputTarefa")
let btnAdd = document.getElementById("btnAdd")
let main  = document.getElementById("areaLista")

function addTarefa (){
    let valorInput = input.value
    if (!(valorInput !==" " && valorInput !== null && valorInput !== undefined)){
      return }
        ++ contador
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> 
            Deletar 
         </button> 
        </div>
    </div>`
       
        main.innerHTML += novoItem
        input.value = " "
        input.focus()
    }


function deletar (id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");
    console.log(classe);
  
    if (classe == "item") {
      item.classList.add("clicado");
  
      let icone = document.getElementById("icone_" + id);
      icone.classList.remove("mdi-circle-outline");
      icone.classList.add("mdi-check-circle");
      
     
      itens.push(input.value)
      item.parentNode.appendChild(item);
    } else {
      item.classList.remove("clicado");
  
      let icone = document.getElementById("icone_" + id);
      icone.classList.remove("mdi-check-circle");
      icone.classList.add("mdi-circle-outline");
    }
  }


input.addEventListener("keyup", function (event){
    if (event.keyCode === 13) {
      event.preventDefault();
      btnAdd.click();
    }
  });

