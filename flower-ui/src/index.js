import React from 'react'
import ReactDOM from 'react-dom'
import FlowerStoreAppContainer from './FlowerStoreApp'
import { Provider } from 'react-redux'
import flowerStore from './FlowerStore'
import './index.css';

ReactDOM.render(
    <Provider store={flowerStore}>
      <FlowerStoreAppContainer />
    </Provider>,
   document.getElementById('root')
);