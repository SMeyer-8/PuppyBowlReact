import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPlayers } from '../ajaxHelpers/puppies';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
        const response = await fetchAllPlayers();
        setPlayers(response);
      };
  
      getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h1>{player.name}</h1>
          <img src={player.imageUrl} alt={player.name} />
          <Link to={"/puppy/" + player.id}>Go To Details</Link>
        </div>
      ))}
    </div>
  );
};

export default AllPlayers;