import React from 'react';
import './animals.css'

let animals = [
    {
        image: 'images/caesar.jpg',
        type: 'Ape',
        name:'Caesar',
        description: 'Caesar is an evolved chimpanzee and leader of the Apes.',
        animalId: 1
    },
    {
        image: 'images/rocket.png',
        type: 'Ape',
        name: 'Rocket',
        description: 'Rocket is a chimpanzee, former enemy turned friend of Caesar and second in command of the apes.',
        animalId: 2
    },
    {
        image: 'images/maurice.jpg',
        type: 'Ape',
        name: 'Maurice',
        description: 'Maurice is a former circus orangutan, Caesars first/best friend and third in command of the apes.',
        animalId: 3
    },
    {
        image: 'images/Buck.webp',
        type: 'Ape',
        name: 'Buck',
        description: 'Buck is a gorilla, Caesars second friend and fourth in command of the apes.',
        animalId: 4
    },
    {
        image: 'images/akela.png',
        type: 'Wolf',
        name: 'Akela',
        description: 'Akela is the alpha of the wolf pack that adopted Mowgli.',
        animalId: 5
    },
    {
        image: 'images/raksha.png',
        type: 'Wolf',
        name: 'Raksha',
        description: 'Raksha is a female wolf and Mowglis adoptive mother.',
        animalId: 6
    },
    {
        image: 'images/rama.jpg',
        type: 'Wolf',
        name: 'Rama',
        description: 'Rama is a male wolf and Mowglis adoptive father.',
        animalId: 7
    },
    {
        image: 'images/grey-brother.png',
        type: 'Wolf',
        name: 'Grey-Brother',
        description: 'Grey-Brother is a young male wolf and Mowglis adoptive brother',
        animalId: 8
    },
    {
        image: 'images/jaws.jpg',
        type: 'Shark',
        name: 'Bruce',
        description: 'Bruce is the star of the classic movie Jaws.',
        animalId: 9
    },
    {
        image: 'images/jaws2.jpeg',
        type: 'Shark',
        name: 'Shark 2',
        description: 'Shark 2 was the star of the classic sequel Jaws 2.',
        animalId: 10
    },
    {
        image: 'images/worst-shark.jpg',
        type: 'Shark',
        name: 'Worst Shark',
        description: 'Worst Shark was the star of the terrible Jaws 3D.',
        animalId: 11
    },
    {
        image: 'images/jaws4.jpg',
        type: 'Shark',
        name: 'Shark 4',
        description: 'Shark 4 was the star of the ridiculous final Jaws movie, Jaws the Revenge.',
        animalId: 12
    }
]

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