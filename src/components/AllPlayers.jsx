import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPlayers, removePlayer } from '../ajaxHelpers/puppies';
import styles from '../styles/components/AllPlayers.module.css'
import NewPlayerForm from './NewPlayerForm';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);

    const getPlayers = async () => {
        const response = await fetchAllPlayers();
        setPlayers(response);
    };
    
    useEffect(() => {
        getPlayers();
    }, []);

  async function deletePuppyHandler(id) {
      await removePlayer(id);
      getPlayers();
  }

  return (
    <div>
        <NewPlayerForm/>
        <div id={styles.allPlayers}>
            
            {players.map((player) => (
            <div key={player.id} className={styles.card}>
                <h1>{player.name}</h1>
                <img src={player.imageUrl} alt={player.name} />
                <Link to={"/puppy/" + player.id}>Go To Details</Link>
                <button onClick={() => deletePuppyHandler(player.id)}>Delete</button>
            </div>
            ))}
        </div>
    </div>
  );
};

export default AllPlayers;