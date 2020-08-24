import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import './Todo.css'

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      items: [],
    };
  }
  //#region LoadAndSnohw
  //snow
  componentDidMount() {
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: 'Pagar la Renta',
          completed: false,
        },
        {
          id: uuidv4(),
          task: 'Rentar Alquiler',
          completed: false,
        },
        {
          id: uuidv4(),
          task: 'Realizar Trabajo de React',
          completed: false,
        },
      ],
    });
  }
  //load
  UNSAFE_componentWillMount() {}
  //#endregion

  //#region MetodosEventos
  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;

    //const value = e.target.value;
    this.setState({
      task: value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      task: '',
      items: [
        ...prevState.items,
        {
          id: uuidv4(),
          task: prevState.task,
          completed: false,
        },
      ],
    }));

    //anadir task a el estado(items)
    //actualizar la vista con la tarea
  };
  //#endregion

  //#region Funciones
  markAsCommpleted = (id) => {
    const foundTask = this.state.items.find((task) => task.id === id);
    foundTask.completed=true;

    this.setState((prevState)=>({
      items: [...prevState.items],
    }));
  };
  removeTask= (id) => {
    const filteredTasks = this.state.items.filter((task) => task.id !== id);

    this.setState({
      items: filteredTasks,
    });
  };
  //#endregion

  render() {
    return (
      <div className="Todo">
        <h1>New Task</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.task} onChange={this.handleOnChange}></input>
        </form>

        <List items={this.state.items} markAsCommpleted={this.markAsCommpleted} removeTask={this.removeTask}></List>
      </div>
    );
  }
}

export default Todo;
