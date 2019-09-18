document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/portfolio', function(data) {

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.

      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */

    context = data['portfolio'][value]
    coDesReplace('titulo', context)

    context = data['projetos'][value]
    coDesReplace('.item3', context)

    console.log(data)

    context = data
    coDesReplace('.ul', context)
    coDesReplace('.item1', context)


    /*context = data
    coDesReplace('.item1', context)

    context = data['portfolio'][value]
    coDesReplace('.item4', context)*/
  })
})
