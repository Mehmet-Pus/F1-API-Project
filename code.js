

const f1Races = fetch('http://ergast.com/api/f1/current.json')
f1Races.then(response => {
  return response.json();
})
.then(f1Races => {
  f1Races.forEach(race => {
    const markup = `<li>${race.name}</li>`;
    document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
  })
  console.log(races); 
}); 

  
  

/*const f1Races = fetch('http://ergast.com/api/f1/current.json')
f1Races.then(response => {
  return response.json();
})
.then(races => {
  console.log(races); 
}); 
*/

/*fetch('http://ergast.com/api/f1/current.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    appendData(data);
  });
function appendData(data) {
  var mainContainer = document.getElementById("races");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + '' + data[i].lastName;
    mainContainer.appendChild(div);
    }
} */




/* const f1Races = fetch('http://ergast.com/api/f1/current.json')
f1Races.then(response => {
  return response.json();
})
.then(races => {
  console.log(races); 
}); 

  .then(data => {
    data.forEach(race => {
      const markup =  `<li>${race.name}</li> `;

      document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
    })
  }); */




 

  