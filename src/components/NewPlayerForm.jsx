import React from 'react'
import { addNewPlayer } from '../ajaxHelpers/puppies';

const NewPlayerForm = () => {

    async function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        formJson.name = formJson.dogName;
        delete formJson.dogName;
        formJson.imageUrl = 'https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png';
        await addNewPlayer(formJson);
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input name="dogName" type="text"/>
            </label>
            <label>Breed:
                <input name="breed" type="text"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewPlayerForm