import React, { Component } from 'react';
import FlowerTable from './FlowerTable';
import FlowerForm from './FlowerForm';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import flowerActions from './FlowerAction';

class FlowerStoreApp extends Component {
     
  state = {
        all_flowers: []     
    };


    removeFlower = index => {
        const { flowers } = this.props;    
        this.setState({
            flowers: flowers.filter((flower, i) => { 
                return i !== index;
            })
        });
    }

    addFlower = flower => {
        this.props.onAdd(flower)   
    }

    listFlowers = () => {
        this.props.onList()
        const {flowers} = this.props
         this.setState({
            all_flowers: flowers
         });  
               
    }
    updateFlower = flower => {
        this.props.updateFlower(flower)
    }

    render() {
        const { all_flowers } = this.state;
        
        return (
            <div className="container">
                <h1>Simple Flower Store Application </h1>
                <p>Add a flower in to store with a name and a price associated with it.</p>
                
                <h3>Add a new Flower</h3>
                <FlowerForm addFlower={this.addFlower} 
                updateFlower={this.updateFlower} />
                <p></p>
                <h3>List of flowers added.</h3>

                <input 
                    type="button" 
                    value="List All Flowers" 
                    onClick={this.listFlowers} />

                <FlowerTable
                    flowerData={all_flowers}
                    removeFlower={this.removeFlower}
                />
            </div>
        );
    }
}

FlowerStoreApp.propTypes = {
    flowers: PropTypes.array,
    //flower: PropTypes.object,
    onAdd: PropTypes.func,
    onUpdate: PropTypes.func,
    onRemove: PropTypes.func,
    onList: PropTypes.func
  };

const mapStateToProps = (state) => {
    return {
      flowers: state.flowers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      onAdd: (flower) => dispatch(flowerActions.addFlower(flower)),
      onUpdate: (flower) => dispatch(flowerActions.addFlower(flower)),
      onRemove: (flower) => dispatch(flowerActions.addFlower(flower)),
      onList: () => dispatch(flowerActions.listFlowers())
    }
}
const FlowerStoreAppContainer = connect(mapStateToProps, mapDispatchToProps)(FlowerStoreApp)

export default FlowerStoreAppContainer;
