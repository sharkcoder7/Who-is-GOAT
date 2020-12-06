# [Who is GOAT]


### Background and Overview 

There has been debates between basketball fans for years now in regards to who is the real Greatest Of All Time. The aim of this project is to provide the stats side by side to end that discussion.


### Functionality and MVPs
- Landing page

- D3.js dynamic chart

- Ability to compare regular season stats between Michael Jordan and LeBron James based on Points, Assists, Rebounds, and Turnovers


### Architecture and Technology

JS, CSS, Webpack, D3.js

https://www.balldontlie.io/ for player stat comparisons.


### Implementation Timeline

1. Host on Github pages
2. Read documentation on d3.js
3. Fetch regular season stats for both players; parse and store data 
4. Implement chart, establish clean and dynamic code to allow for comparison upon various fields
5. Style page, add links, source


### Basic File Structure
- src/

  - playerStats/
    - lebronSeasonStats.json
    - jordanSeasonStats.json

  - scripts/
    - chart.js
    - main.js

  - styles/
    - index.scss

  - index.js


### Code Snippet
index.js
```Javascript
document.addEventListener("DOMContentLoaded", () => {
  let dropdownOption = "pts"
  const main = document.getElementById("main");
  let content = new Main(dropdownOption);
  const dropdown = document.getElementById("category").onchange = function(){
    dropdownOption = this.value
    document.getElementById('d3-container').innerHTML = ''
    content = new Main(dropdownOption)
    
  }
```


### (Bonus Features)

Allow stats comparison for playoffs



