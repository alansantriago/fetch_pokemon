function fetchData() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const request = new XMLHttpRequest();

  request.onload = function () {
    if (request.status === 200) { // Check for successful response
      const data = JSON.parse(request.responseText);
      const pokemonList = document.getElementById('pokemon-list'); // Reference the empty tbody
      pokemonList.innerHTML = ''; // Clear existing content (optional)

      data.results.forEach((pokemon, index) => {
        const row = document.createElement('tr');
        const numCell = document.createElement('td');
        const nameCell = document.createElement('td');

        numCell.textContent = index + 1; // Add numbering (1-10)
        nameCell.textContent = pokemon.name;

        row.appendChild(numCell);
        row.appendChild(nameCell);
        pokemonList.appendChild(row);
      });
    } else {
      console.error('Error fetching data:', request.statusText);
    }
  };

  request.open('GET', url);
  request.send();
}