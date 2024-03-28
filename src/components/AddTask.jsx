import React, { useState } from 'react';
import './project.css';
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <div className='wrapper'>
      <form className="add-form" onSubmit={onSubmit}>
        <input className='input'
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='btn' type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default AddTask;
