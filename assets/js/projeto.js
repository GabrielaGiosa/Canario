document.addEventListener('DOMContentLoaded', function() {
	let parametro = coDesExtract()
	let valor = parametro["key"]
	let variavel= parametro["chave"]

let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/portfolio', function(data) {
    let context = data[valor]['projetos'][variavel]
    coDesReplace('.titulo', context)
    coDesReplace('.item3', context)
    coDesReplace('.lista', context)
    coDesReplace('.lista_', context)
  })
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
