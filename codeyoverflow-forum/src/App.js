import React from 'react';
import {comments} from './commentData';
import {Card} from "./Card.js";

export function App () {
    return comments.map(comment => <Card commentObject={comment} />);
}







