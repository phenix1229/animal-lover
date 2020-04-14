import React from 'react';
import Animals from './Animals';
import animals from '../data/data';
import './animals.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animals,
            likes: [],
            dislikes: []
        };
    };
    handleLike = (animal) => {
        if(!this.state.likes.includes(animal)){
            if(this.state.dislikes.includes(animal)){
                let newDislikes = this.state.dislikes.filter(item => item !== animal);
                this.setState({dislikes: newDislikes});
            };
            this.setState({likes: this.state.likes.concat(this.state.animals.filter(item => item === animal))});
        };
    };
    handleDislike = (animal) => {
        if(!this.state.dislikes.includes(animal)){
            if(this.state.likes.includes(animal)){
                let newLikes = this.state.likes.filter(item => item !== animal);
                this.setState({likes: newLikes});
            };
            this.setState({dislikes: this.state.dislikes.concat(this.state.animals.filter(item => item === animal))})
        };
    };
    handleDiscard = (animal) => {
        let newAnimals = this.state.animals.filter(item => item !== animal);
        let newLikes = this.state.likes.filter(item => item !== animal);
        let newDislikes = this.state.dislikes.filter(item => item !== animal);
        this.setState({animals:newAnimals, likes:newLikes, dislikes: newDislikes});
    };
    handleClear = (animal, state) => {
        if(state === this.state.likes){
            let newLikes = this.state.likes.filter(item => item !== animal);
            this.setState({likes: newLikes});
        } else if (state === this.state.dislikes){
            let newDislikes = this.state.dislikes.filter(item => item !== animal);
            this.setState({dislikes: newDislikes});
        };
    };
    render() {
        return (
            <div>
                <Animals animals={this.state.animals} handleLike={this.handleLike} handleDislike={this.handleDislike} handleDiscard={this.handleDiscard} handleClear={this.handleClear} likes={this.state.likes} dislikes={this.state.dislikes} />
            </div>
        )
    }
} 

export default App;