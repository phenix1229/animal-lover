import React from 'react';
import Button from './Button';

const AnimalItem = ({handleLike, handleDislike, handleDiscard,  animal}) => {
    return (
        <div key={animal.animalId} className='card'>
            <div className='cardImage'>
                <img src={animal.image} alt='.' />
            </div>
            <div className='cardText'>
                <p>{animal.name}</p>
                <p style={{opacity:'50%'}}>{animal.type}</p>
                <p style={{opacity:'70%'}}>{animal.description}</p>
                <br />
            </div>
            <div className='cardBtns'>
                <Button className='likeBtn' onClick={()=> {return handleLike(animal)}}>Like</Button>
                <Button className='dislikeBtn' onClick={()=> {return handleDislike(animal)}}>Dislike</Button>
                <Button className='discardBtn' onClick={()=> {return handleDiscard(animal)}}>Discard</Button>
            </div>
        </div>
    )
};

export default AnimalItem;