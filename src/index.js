import "./styles/index.scss";
import Main from './scripts/main';



document.addEventListener("DOMContentLoaded", () => {
  let dropdownOption = "pts"
  const main = document.getElementById("main");
  let content = new Main(dropdownOption);
  const dropdown = document.getElementById("category").onchange = function(){
    dropdownOption = this.value
    document.getElementById('d3-container').innerHTML = ''
    content = new Main(dropdownOption)
    
  }


  // fetch('https://www.balldontlie.io/api/v1/stats?start_date=1984-10-26&player_ids[]=2931&per_page=100&page=4')
  //   .then(
  //     function (response) {
  //       if (response.status !== 200) {
  //         console.log('Looks like there was a problem. Status Code: ' +
  //           response.status);
  //         return;
  //       }

  //       // Examine the text in the response
  //       response.json().then(function (data) {
  //         console.log(data);
  //       });
  //     }
  //   )
  //   .catch(function (err) {
  //     console.log('Fetch Error :-S', err);
  //   });

})


// to key in to season .. dataset.data.game.season

// iterate over data, key into game.season && then based on the season, average out all the stats

// const season = yr => { dataset.data.filter(game => {
// return game.season === yr
//})}
// seasonAvg = category => { season.map(game => {
// return game.category
//})
// return (seasonAvg / seasonAvg.length) 
//}


// this will allow to create a dropdown that allows the user to select based on category(pts, ast etc)

//next step is implementing Michael Jordan's stats in the bar chart


// create middle component 
// pass click handlers and data to be filtered 
