import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function NumberList(props) {
  const pokemon = props.pokedex;
  const listPokemon = pokemon.map(poke =>
    <li key={poke.name.toString()}>
      {poke.name}
    </li>
  );
  return (
    <ul>{listPokemon}</ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList pokedex={pokedex}/>);
