import React from 'react';

export function Header (props) {
    return (
        <div>
        <img alt={"Profile image."} src={props.profileImg} />
            <h1>{props.username}</h1>
        </div>
    )
}