import React, { Component } from 'react';
import uuid from 'uuid/v4';

import './style.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: []
    }
  }

  componentDidmount(){
	  const tareas = localstorage.getItem('OLIVER-tareas';
	  if(tareas){
		  history.setState({tareas});
	  }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const {tareas} = this.state;
    const task = {
      id: uuid(),
      title,
      description,
      createdAt: new Date(),
      done: false
    };
    tareas.push(task);

    this.setState({tareas});

    e.target.reset();
  }

  handleDelete = (e, id) => {
    e.preventDefault();
    const {tareas} = this.state;
    const tasks = tareas.filter(tarea => tarea.id !== id);
    this.setState({tareas: tasks});
  }

  render() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return(
      <div className="main">
        <h1>Mi Lista</h1>
        <form onSubmit={this.onSubmit}>
          <p>
          <label htmlFor="title">Titulo</label><br/>
          <input type="text" name="title" id="title" />
          </p>
          <p>
          <textarea name="description" id="description"
          cols="30" rows="10" />
          </p>
          <p>
            <button type="submit">Crear</button>
          </p>
        </form>
        {this.state.tareas.map((tarea,id) => (
          <div key={id} className="task">
            <h3>{tarea.title}</h3>
            <p className="date">{new Date(tarea.createdAt).toLocaleDateString('es-ES', options)}</p>
            <p>{tarea.description}</p>
            <button onClick={(e) => this.handleDelete(e, tarea.id)}>Borrar</button>
          </div>
        ))}
        {!this.state.tareas.length && <h2>No hay tareas creadas</h2>}
      </div>
    );
  }
}

export default Home;
