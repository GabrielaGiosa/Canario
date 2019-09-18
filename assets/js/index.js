document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/', function(data) {
    context = data

    coDesReplace('.ul', context)
    coDesReplace('.item1', context)
    coDesReplace('item4', context)
    


    // let gabi = data['portfolio']
    // coDesReplace('container3', gabi)

    // coDesReplace('.item3', gabi)
    // coDesReplace('.item2', gabi)

  })
})
