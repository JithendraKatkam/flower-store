import React, { Component } from 'react';
import FlowerTable from './FlowerTable';
import FlowerForm from './FlowerForm';

class FlowerStoreApp extends Component {
    state = {
        flowers: [],
        flower:{}
    };

    removeFlower = index => {
        const { flowers } = this.state;
    
        this.setState({
            flowers: flowers.filter((flower, i) => { 
                return i !== index;
            })
        });
    }

    addFlower = flower => {
        this.setState({flowers: [...this.state.flowers, flower]});
        //this.props.addFlower(flower)

    }
    updateFlower = flower => {
        this.setState({flowers: [...this.state.flowers, flower]});
        //this.props.addFlower(flower)
    }

    render() {
        const { flowers } = this.state;
        
        return (
            <div className="container">
                <h1>Simple Flower Store Application </h1>
                <p>Add a flower in to store with a name and a price associated with it.</p>
                
                <h3>Add a new Flower</h3>
                <FlowerForm addFlower={this.addFlower} 
                updateFlower={this.updateFlower} />
                <p></p>
                <h3>List of flowers added.</h3>

                <FlowerTable
                    flowerData={flowers}
                    removeFlower={this.removeFlower}
                />
            </div>
        );
    }
}
export default FlowerStoreApp;