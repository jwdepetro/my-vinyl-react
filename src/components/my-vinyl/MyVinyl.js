import React, { Component } from 'react';
import Axios from 'axios';

class MyVinyl extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { items: [] } }

        const uri = 'http://localhost:5000/api/records';
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };

        Axios
            .get(uri, options)
            .then(r => this.setState({ data: r.data }))
            .catch(e => console.log('error', e));
    }

    render() {
        return (
            <div>
                <p>My Vinyl works!</p>
                <ul>
                    {this.state.data.items.map(i => <li key={i.id}>{i.artist} - {i.album}</li>)}
                </ul>
            </div>
        )
    }
}

export default MyVinyl