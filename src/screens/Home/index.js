// imports
import React from 'react';
import List from '../List/index';
import Form from '../Form/index';
import './style.css';

// JSON tasks
const tareas = [
	{
		id: 1,
		title: 'Hacer curso de React',
		body: 'Crear la presentación y los ejercicios de ejemplo',
		tags: ['react ', 'curso'],
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
];	

// Component Home
const Home = () => (	
	<div className="main">  
		<h1>Mi Lista  de tareas</h1>
		<Form />
		<div className="task">
			<h2>Pendientes</h2>
			{tareas.map ((task)=> (
				<List 
				title = {task.title}
				id= {task.id}
				body= {task.body}
				tags = {task.tags}
				done = {task.done}
				createdAt = {task.createdAt}
				finishedAt = {task.finishedAt}
				/>
			))}
		</div>
	</div>
);

export default Home;
