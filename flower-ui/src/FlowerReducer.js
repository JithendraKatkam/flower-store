import constants from './Constants';
const initialState = {
flowers: []
}
const flowerReducer = (state = initialState, action) => {
console.log(action); //Temporarily logging all actions
switch (action.type) {
case constants.ADD_FLOWER:
return {flowers: [...this.state.flowers]};
case constants.UPDATE_FLOWER:
return {flowers: state.flowers};
case constants.REMOVE_FLOWER:
return {     
    flowers: state.filter((index, i) => { 
        return i !== index;
    })};
default:
return state;
}
}
export default flowerReducer;