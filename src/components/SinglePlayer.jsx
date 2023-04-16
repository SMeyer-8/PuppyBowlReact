import React, { useState, useEffect } from 'react'
import { fetchSinglePlayer } from '../ajaxHelpers/puppies';
import { useParams } from 'react-router-dom'

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
            <h1>Single Player</h1>
            <p>{player.name}</p>
        </div>
    )
        
}

export default SinglePlayer;