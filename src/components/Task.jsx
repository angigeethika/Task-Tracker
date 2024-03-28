import React, { Component } from 'react';
import './project.css';
class Task extends Component {
  render() {
    const { task, onDelete } = this.props;

    return (
      <div className="wrapper">
        <h3>{task.text}</h3>
        <button className="btn" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
}

export default Task;
