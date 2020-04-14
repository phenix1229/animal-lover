import React from 'react';

const DislikeItem = ({handleClear, animal, dislikes}) => {
    return (
        <div onClick={()=> {return handleClear(animal, dislikes)}} key={animal.animalId} className='smallCard'>
            <div className='smallCardImage'>
                <img src={animal.image} alt='.' />
            </div>
            <div className='smallCardText'>
                <p>{animal.name}</p>
            </div>
        </div>
    )
};

export default DislikeItem;