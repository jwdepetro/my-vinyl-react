import React, { Component } from 'react';
import Axios from 'axios';

class MyVinyl extends Component {
    constructor(props) {
        super(props);

        const uri = 'http://localhost:5000/api/records';
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };

        Axios
            .get(uri, options)
            .then(r => console.log('response', r))
            .catch(e => console.log('error', e));
    }

    render() {
        return (
            <p>My Vinyl works!</p>
        )
    }
}

export default MyVinyl