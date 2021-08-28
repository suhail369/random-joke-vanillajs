// Variable assign
const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const url = 'https://icanhazdadjoke.com';

// Function call
generateJoke();

// Function define
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch(url, config);
  const data = await response.json();
  jokeElement.innerHTML = data.joke;
}

// Event listener
jokeBtn.addEventListener('click', generateJoke);

// FETCHING DATA FROM .then() FUNCTION

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch(url', config)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
