import React, {Component} from 'react';

class FlowerForm extends Component {
    constructor(props) {
        super(props);        
        this.initialState = {
            name: '',
            price: ''
        };
        this.state = this.initialState;
    }

    addFlower = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }
    
    updateFlower = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.addFlower(this.state);
        //this.props.updateFlower(this.state);
        this.setState(this.initialState);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    render() {
        const { name, price } = this.state; 

        return (
            <form>
                <label>Flower Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Flower Price</label>
                <input 
                    type="text" 
                    name="price" 
                    value={price} 
                    onChange={this.handleChange}/>
                <input 
                    type="button" 
                    value="Add" 
                    onClick={this.submitForm} /> <input 
                    type="button" 
                    value="Update" 
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default FlowerForm;