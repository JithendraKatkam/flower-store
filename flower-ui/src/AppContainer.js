import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import flowerStore from './FlowerStore';
import constants from './Constants';

class FlowerStoreAppContainer extends Component {
constructor(...args) {
super(...args);
flowerStore.dispatch({type:constants.CREATE_ACCOUNT})
this.state = {
balance: flowerStore.getState().balance
}
}
componentDidMount() {
this.unsubscribe = flowerStore.subscribe(() =>
this.setState({balance: flowerStore.getState().balance})
);
}
componentWillUnmount() {
this.unsubscribe();
}
render(){
return(
<FlowerStoreApp
balance={ flowerStore.getState().balance }
onDeposit={ (amount)=>flowerStore.dispatch( {type:constants.DEPOSIT_INTO_ACCOUNT, amount:amount} )}
onWithdraw={ (amount)=>flowerStore.dispatch({type:constants.WITHDRAW_FROM_ACCOUNT, amount:amount} )}
/>
)
}
}
render(<FlowerStoreAppContainer />, document.getElementById('root'));