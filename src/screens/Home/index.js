import React from 'react';

import './style.css';

const tareas = [
  {
    id: 1,
    title: 'Hacer curso de React',
    body: 'Crear la presentación y los ejercicios de ejemplo',
    tags: ['react', 'curso'],
    done: false,
    createdAt: '2019-01-10T14:41:52.566Z',
    finishedAt: null
  },
  {
    id: 2,
    title: 'Hacer curso de React',
    body: 'Crear la presentación y los ejercicios de ejemplo',
    tags: ['react', 'curso'],
    done: false,
    createdAt: '2019-01-10T14:41:52.566Z',
    finishedAt: null
  },
  {
    id: 3,
    title: 'Hacer curso de React',
    body: 'Crear la presentación y los ejercicios de ejemplo',
    tags: ['react', 'curso'],
    done: false,
    createdAt: '2019-01-10T14:41:52.566Z',
    finishedAt: null
  },
  {
    id: 4,
    title: 'Hacer curso de React',
    body: 'Crear la presentación y los ejercicios de ejemplo',
    tags: ['react', 'curso'],
    done: false,
    createdAt: '2019-01-10T14:41:52.566Z',
    finishedAt: null
  }
]

const Home = () => (
  <div className="main">
    <h1>Mi Lista</h1>
  </div>
);

export default Home;
