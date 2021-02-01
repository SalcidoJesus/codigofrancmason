if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

function  buscar(){
  
  texto = document.getElementById('texto').value
  div = document.getElementById('resultado')
  resultado = ''

  for (i = 0; i < texto.length; i++) {
    
    letra = texto[i].toLowerCase()

    if (letra == ' ') {
      resultado += ' '
    } else {
      if (letra == 'ñ') {
        resultado += `<img src='img/codigos/n.jpg'>`
      } else {
        letra2 = buscarLetra(letra)
        console.log(letra2)
        resultado += `<img src='img/codigos/${letra2}.jpg'>`
      }
    }
  }
  // console.log(letra2);
  div.innerHTML = resultado
}

function buscarLetra(l) {
  // console.log("L->"+l);
  letra_a = ['a', 'á', 'ä']
  letra_e = ['e', 'é', 'ë']
  letra_i = ['i', 'í', 'ï']
  letra_o = ['o', 'ó', 'ö']
  letra_u = ['u', 'ú', 'ü']

  if (letra_a.indexOf(l) >= 0) {
    letraFinal = 'a'
  } else if (letra_e.indexOf(l) >= 0) {
    letraFinal = 'e'
  } else if (letra_i.indexOf(l) >= 0) {
    letraFinal = 'i'
  } else if (letra_o.indexOf(l) >= 0) {
    letraFinal = 'o'
  } else if (letra_u.indexOf(l) >= 0) {
    letraFinal = 'u'
  } else {
    letraFinal = l
  }

  // console.log(letraFinal);
  return letraFinal

}
