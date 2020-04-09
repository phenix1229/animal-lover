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
        image: 'images/rocket.webp',
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
        image: 'images/akela.webp',
        type: 'Wolf',
        name: 'Akela',
        description: 'Akela is the alpha of the wolf pack that adopted Mowgli.',
        animalId: 5
    },
    {
        image: 'images/raksha.webp',
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
        image: 'images/grey-brother.webp',
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
        image: 'images/jaws3.jpg',
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
    handleLike = (animalId) => {
        this.setState({likes: this.likes.concat(animalId)})
    }
    handleDislike = (animalId) => {
        this.setState({dislikes: this.dislikes.concat(animalId)})
    }
    handleDiscard = (animalId) => {

    }
    render() {
        return (
            <div id='wrapper'>
            <div id='main'>
                {this.state.animals.map((animal, idx) => {
                    return (
                        <div className='card'>
                            <div className='cardImage'>
                                <img src={animal.image} alt='.' />
                            </div>
                            <div className='cardText'>
                                <p>{animal.name}</p>
                                <p>{animal.type}</p>
                                <p>{animal.description}</p>
                                <br />
                            </div>
                            <div className='cardBtns'>
                                <button className='likeBtn' onClick={this.handleLike}>Like</button>
                                <button className='dislikeBtn' onClick={this.handleDislike}>Dislike</button>
                                <button className='discardBtn' onClick={this.handleDiscard}>Discard</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='sideBar'>
            </div>
            </div>
        );
    };
}

export default Animals;