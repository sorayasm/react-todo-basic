import React from 'react';
import './style.css';

const List= ({title, body, tags,  createdAt}) => ( 
    <div className="task">
        <h4>{title}</h4> 
        <p className="date">Creado en: {createdAt} </p>
        <p>{body}</p>
        <p className="tag">{tags}</p>
        <button className="finish-button" type="submit">Terminar</button>
    </div>
);

export default List;