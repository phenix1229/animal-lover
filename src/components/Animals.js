import React from 'react';
import './animals.css';
import animals from '../data/data';


class Animals extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animals,
            likes: [],
            dislikes: []
        }
    }
    handleLike = (animal) => {
        if(!this.state.likes.includes(animal)){
            if(this.state.dislikes.includes(animal)){
                let newDislikes = this.state.dislikes.filter(item => item !== animal);
                this.setState({dislikes: newDislikes});
            };
            this.setState({likes: this.state.likes.concat(this.state.animals.filter(item => item === animal))});
        }
    }
    handleDislike = (animal) => {
        if(!this.state.dislikes.includes(animal)){
            if(this.state.likes.includes(animal)){
                let newLikes = this.state.likes.filter(item => item !== animal);
                this.setState({likes: newLikes});
            };
            this.setState({dislikes: this.state.dislikes.concat(this.state.animals.filter(item => item === animal))})
        }
    }
    handleDiscard = (animal) => {
        let newAnimals = this.state.animals.filter(item => item !== animal);
        let newLikes = this.state.likes.filter(item => item !== animal);
        let newDislikes = this.state.dislikes.filter(item => item !== animal);
        this.setState({animals:newAnimals, likes:newLikes, dislikes: newDislikes});
    }
    handleClear = (animal, state) => {
        if(state === this.state.likes){
            let newLikes = this.state.likes.filter(item => item !== animal);
            this.setState({likes: newLikes});
        } else if (state === this.state.dislikes){
            let newDislikes = this.state.dislikes.filter(item => item !== animal);
            this.setState({dislikes: newDislikes});
        }
    }
    render() {
        return (
            <div id='wrapper'>
            <div id='main'>
                <div id='header'>
                    <h1>Animal Lover</h1>
                </div>
                <div id='cards'>
                {this.state.animals.map((animal, idx) => {
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
                                <button className='likeBtn' onClick={()=> {this.handleLike(animal)}}>Like</button>
                                <button className='dislikeBtn' onClick={()=> {this.handleDislike(animal)}}>Dislike</button>
                                <button className='discardBtn' onClick={()=> {this.handleDiscard(animal)}}>Discard</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className='sideBar'>
                <div id='likesArea'>
                    <h2 className='sideTitle'>Likes</h2>
                    {this.state.likes.map((animal, idx) => {
                        return (
                            <div onClick={()=> {this.handleClear(animal, this.state.likes)}} key={animal.animalId} className='smallCard'>
                                <div className='smallCardImage'>
                                    <img src={animal.image} alt='.' />
                                </div>
                                <div className='smallCardText'>
                                    <p>{animal.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div id='dislikesArea'>
                    <h2 className='sideTitle'>Dislikes</h2>
                    {this.state.dislikes.map((animal, idx) => {
                        return (
                            <div onClick={()=> {this.handleClear(animal, this.state.dislikes)}} key={animal.animalId} className='smallCard'>
                                <div className='smallCardImage'>
                                    <img src={animal.image} alt='.' />
                                </div>
                                <div className='smallCardText'>
                                    <p>{animal.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        );
    };
}

export default Animals;