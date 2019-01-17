import React ,{Component} from 'react';
import  './style.css';

export default class Form extends Component {
   state = {
       
   }
   /* add(){
       const title = this.refs.title.value;
       const content = this.refs.content.value;
       const tags = this.refstags.value;
   } */

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <p>Ingresa una tarea:</p>
                <input   
                    className="input" 
                    type="text"
                    refs="title"
                    placeholder="Título" />
                <textarea
                    className="input" 
                    type="text"
                    refs="text"
                    placeholder="Describe la tarea a realizar"
                />
                 <input
                    className="finish-button" 
                    type="button"
                    value="Guardar nueva tarea"
                    />
            </form>
        );
    };

}