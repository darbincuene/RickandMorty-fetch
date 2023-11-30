import React from 'react'
import {useState,useEffect } from 'react'
import Layout from '../../Componentes/Layout/index.jsx'
import Card from '../../Componentes/Card/index.jsx'



const Rick = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Layout>
        <h1 className=' text-5xl m-6 font-serif'>Personajes</h1>
      <div className="grid gap-4 grid-cols-3 w-full max-w-screen-lg">
        {characters.map((character) => (
          <Card key={character.id} data={character}>
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-auto"
            />
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Rick;