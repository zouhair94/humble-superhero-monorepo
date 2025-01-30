import React, { useState } from 'react';
import './App.css';

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  const fetchSuperheroes = async () => {
    const response = await fetch('http://localhost:3001/superheroes');
    const data = await response.json();
    setSuperheroes(data);
  };

  const addSuperhero = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/superheroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, superpower, humilityScore: Number(humilityScore) }),
    });
    fetchSuperheroes();
  };

  return (
    <div className="App">
      <h1>Humble Superheroes</h1>
      <form onSubmit={addSuperhero}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Superpower" value={superpower} onChange={(e) => setSuperpower(e.target.value)} required />
        <input type="number" placeholder="Humility Score (1-10)" value={humilityScore} onChange={(e) => setHumilityScore(e.target.value)} min="1" max="10" required />
        <button type="submit">Add Superhero</button>
      </form>
      <ul>
        {superheroes.map((hero) => (
          <li key={hero.id}>
            {hero.name} - {hero.superpower} (Humility: {hero.humilityScore})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;