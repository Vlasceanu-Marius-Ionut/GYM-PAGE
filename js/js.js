function mainPage(){
  const TOP = document.getElementsByName('.topimagenav');
  TOP.addEventListener('click',() => {
    window.location.href = '';
  })
}

//MORE LEARNING
const ar = function(triple) {
  return triple / 3
}

function nbrs (a,b,c,d) {
  
  const result2 = ar(a,b,c,d)
  
  const result = `The resut is ${result2}`
  
  return result
}
nbrs()
const solution = nbrs(44 + 33 + 22 + 502);
console.log(solution)



//SWITCFH
switch(orar) {
  case 'Luni' :
    console.log('vase')
  break
  case 'Marti' :
    console.log('Sala')
  break
  case 'Miercuri' :
    console.log('Programare');
  break;
  case 'Joi':
    console.log('Programare')
  break
  case 'Vineri' :
    console.log('Programare')
  break
  case 'Sambata' :
    console.log('Sala');
  break
  case 'Duminicas':
    console.log('Mancare')
  default:
}
