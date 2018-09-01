import React, {Component} from 'react';

const Record = (props) => {
    return (
        <p>Record works for record: {props.match.params.id}</p>
    )
};

export default Record