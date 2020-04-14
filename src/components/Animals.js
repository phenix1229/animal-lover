import React from 'react';
import AnimalItem from './AnimalItem';
import LikeItem from './LikeItem';
import DislikeItem from './DislikeItem';

const Animals = (props) => {
    return (
        <div id='wrapper'>
            <div id='main'>
                <div id='header'>
                    <h1>Animal Lover</h1>
                </div>
                <div id='cards'>
                    {props.animals.map((animal, idx) => {
                        return (
                            <AnimalItem key={animal.animalId} handleLike={props.handleLike} handleDislike={props.handleDislike} handleDiscard={props.handleDiscard}  animal={animal} />
                        )
                    })}
                </div>
            </div>
            <div className='sideBar'>
                <div id='likesArea'>
                    <h2 className='sideTitle'>Likes</h2>
                    {props.likes.map((animal, idx) => {
                        return (
                            <LikeItem handleClear={props.handleClear} animal={animal} likes={props.likes} />
                        )
                    })}
                </div>
                <div id='dislikesArea'>
                    <h2 className='sideTitle'>Dislikes</h2>
                    {props.dislikes.map((animal, idx) => {
                        return (
                            <DislikeItem handleClear={props.handleClear} animal={animal} dislikes={props.dislikes} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Animals;