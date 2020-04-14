import React from 'react';

const LikeItem = ({handleClear, animal, likes}) => {
    return (
        <div onClick={()=> {return handleClear(animal, likes)}} key={animal.animalId} className='smallCard'>
            <div className='smallCardImage'>
                <img src={animal.image} alt='.' />
            </div>
            <div className='smallCardText'>
                <p>{animal.name}</p>
            </div>
        </div>
    )
};

export default LikeItem;