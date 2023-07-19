function mainPage(){
  const TOP = document.getElementsByName('.topimagenav');
  TOP.addEventListener('click',() => {
    window.location.href = '';
  })
}

//MORE LEARNING
const ar = function(double) {
  return double / 3
}

function nbrs (a,b,c,d) {
  
  const result2 = ar(a,b,c,d)
  
  const result = `The resut is ${result2}`
  
  return result
}
nbrs()
const solution = nbrs(44 + 33 + 22 + 502);
console.log(solution)

