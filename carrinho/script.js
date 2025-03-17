$(document).ready(function(){

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) ||[];

  const ListElement =$("#lista");

  const totalElement =$("#total");

  function exibirCarrinho(){

    ListElement.empty();

    let totalPreco = 0;

    $.each(carrinho, function(index, item){

        const listItem =$("<li>").text(
          '${item.descricao} - Preço: $${item.preco}'
        );

        const removeButton = $("<button>")
        .text("❌")
        .css("margin-left", "10px")
        .click(function(){
          removeItemDoCarrinho()
        });

        listItem.append(removeButton)
        ListElement.append(listItem)
        totalPreco += item.preco
    });
    totalElement.text('total: $${totalPreco}') 
  }
  function removeItemDoCarrinho(index){
    carrinho.splice(index, 1);
    localStorage.setInterval("carrinho", JSON.stringify("carrinho"))
    exibirCarrinho();
  }
  exibirCarrinho();
});
function gerarDocumentoWord(){
  const  listaElement = document.getElementById("lista")
  const  totalElement = document.getElementById("total")
  const listaClone = listaElement.cloneNode(true)
  $(listaClone).find("button").remove()

  const listaHtml = listaClone.innerHTML
  const totalHtml = totalElement.innerHTML

  const conteudoHtml = `
      <html>
          <head>
              <meta charset="UTF-8" />
          </head>
          <body>
              <h1>Pedido Confirmado</h1>
              ${listaHtml}
              <br><br>
              ${totalHtml}
          </body>
      </html>
  `;

  const blob = new Blob([conteudoHtml], {type: "application/msword"});
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "carrinho.doc";
  link.click();

  document.getElementById("pedido").style.display = "block"
}

function successClose(){
  document.getElementById("pedido").style.display = "none"
}