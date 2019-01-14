import { createStore,applyMiddleware } from 'redux'
import flowerReducer from './FlowerReducer';

const logger = (store) => (next) => (action) => {
    console.log('dispatching:', action);
    return next(action);
}

const flowerStore = createStore(
    flowerReducer,  
    applyMiddleware(logger)
);

export default flowerStore;