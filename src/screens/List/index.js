import React from 'react';

import './style.css';

const List= ({title, body, tags,  createdAt, finishedAt}) => ( 
    <div className="task">
        <h3>{title}</h3> 
        <p>Contenido: {body}</p>
        <p className="tag">{tags} </p>
        <p className="date">Creado en: {createdAt} / Finaliza en: {finishedAt}</p>
    </div>
   
);

export default List;