import { createStore } from 'redux'
import flowerReducer from './FlowerReducer';
const flowerStore = createStore(flowerReducer);
export default flowerStore;