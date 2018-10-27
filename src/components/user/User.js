import React from 'react';

const User = (props) => {
    return (
        <p>User works for username: {props.match.params.username}!</p>
    )
};

export default User