// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;


//1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())

const jokesJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokesJS1);
//=================
//1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)
p1.innerText = jokesJS1.setup;
//OR
//p1.innerHTML = jokesJS1.setup;
//====================
//1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)
p2.innerText = jokesJS1.punchline;
//OR
//p2.innerHTML = jokesJS1.punchline;
console.log(jokesJS1.setup);
//======================
// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

//2a. Use the "Returns a single random quote." endpoint/URL to GET a Random quote using axios
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
//================
//2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called friendsJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request).
.then(res => {
    console.log(res);
    const friendsJS2 = res.data;
    console.log(res.data);

//================
//2c. Inside of the same function, access the value for the "character" key in the friendsJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "quote" key in the friendsJS2 object and set it to the inner text for the p4 variable/element (If done correctly the character and quote for the quote should display on the webpage)
p3.innerText = friendsJS2.character;
p4.innerText = friendsJS2.quote;
})
//===================
//2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).
.catch(err => {
    console.log(`Question 2 Failed`);
    console.log(err);
});
//==============
// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
//=============
//3b
async function quoteFunc (){
    try {
      // 3a
      const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
      //==============
    //3c
    p5.innerText = quoteJS3.data.character;
    p6.innerText = quoteJS3.data.quote;
    //3d
} catch (err) {
    console.log(err);
  }
}
quoteFunc();
//==============
// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

//4a
const baseURL = `https://api.tvmaze.com`;
const id = `38963`;
const endpoint = `/shows/${id}/episodebynumber?`;
const queryString = `season=2&number=8`;
const fullEndpoint = baseURL + endpoint + queryString;

//typed out
/*const baseURL = `https://api.tvmaze.com`;
const id = `38963`;
const endpoint = `/shows/${id}/episodebynumber?`;
const season = `2`;
const number = `8`;
const queryString = `season=${season}&number=${number}`;
const fullEndpoint = baseURL + endpoint + queryString;
*/
//or line 89
//const fullEndpoint = `https://api.txmaze.com/shows/38963/episodebynumber?season=2&number=8`
//=================
//4b
tvMazeFunc = async () => {
    try {
      const episode = await axios.get(fullEndpoint);
      console.log(episode);
      p7.innerHTML = episode.data.name;
    } catch (err) {
      console.log(err);
    }
  }
  tvMazeFunc();

  //===========
  //BONUS
  //5
  const img = document.createElement (`img`);
  const body = document.querySelector(`body`);

  axios.get(`http://pokeapi.co/api/v2/pokemon/pikachu`)
  .then(res => {
      console.log(`Q5`);
    console.log(res);
    console.log(res.data.sprites.front_default);
    img.src = res.data.sprites.front_default;
    body.append(img);
  })

  // OR Using Async await
async function getPokemon(){
    const pikachu = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    img.src = pikachu.data.sprites.front_default;
    body.append(img);
  }
  getPokemon();