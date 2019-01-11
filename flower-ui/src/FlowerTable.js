import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.flowerData.map((row, index) => {
        return (
            <tr key={index}>
            <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td><button onClick={() => props.removeFlower(index)}>Remove</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class FlowerTable extends Component {
    render() {
        const { flowerData, removeFlower } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody flowerData={flowerData} removeFlower={removeFlower} />
            </table>
        );
    }
}

export default FlowerTable;