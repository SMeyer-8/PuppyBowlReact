import React, { useState, useEffect } from 'react'
import { fetchSinglePlayer } from '../ajaxHelpers/puppies';
import { Link, useParams } from 'react-router-dom'

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState([]);

    useEffect(() => {
      const getPlayer = async () => {
          const response = await fetchSinglePlayer(id);
          setPlayer(response);
        };
    
        getPlayer();
    }, []);
    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Name: {player.name}</h1>
            <p>Breed: {player.breed}</p>
            <p>Team: {player.team ? player.team.name: ''}</p>
            <img src={player.imageUrl} alt={player.name} />
            
        </div>
    )
        
}

export default SinglePlayer;