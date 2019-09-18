document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/', function(data) {

    /*
      NUNCA, JAMAIS, EM HIPÓTESE ALGUMA faça
      replace em múltiplas tags se alguma
      estiver dentro de outra! Veja o HTML
      e note que não é o caso das abaixo.

      É sério. Se fizer isso, você realmente
      vai se arrepender. Você foi avisado.
    */

    let dora = data['portfolio'][value]
    dora['ab']= value
    coDesReplace('.ul', dora)

    let cat= data['portfolio'][value]
    coDesReplace('.titulo', cat)

  })
})
