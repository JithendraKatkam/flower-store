import {
    ADD_FLOWER,
    UPDATE_FLOWER,
    REMOVE_FLOWER,
    LIST_FLOWERS
} from "./Constants";
const initialState = {
    flowers: []
}
const flowerReducer = (state = initialState, action) => {
    console.log(action); // Logging all actions
    switch (action.type) {
        case ADD_FLOWER:
            return Object.assign({}, state, {
                flowers: state.flowers.concat(action.payload)
            });
        case LIST_FLOWERS:
            return Object.assign({}, state, {
                flowers: state.flowers
            });
        case UPDATE_FLOWER:
            return {
                flowers: state.flowers
            };
        case REMOVE_FLOWER:
            return {
                flowers: state.filter((index, i) => {
                    return i !== index;
                })
            };
        default:
            return state;
    }
}
export default flowerReducer;