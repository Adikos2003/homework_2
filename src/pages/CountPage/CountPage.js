import React, { useState } from 'react';


const CountPage = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    if (count >0) {
      setCount(count-1)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default CountPage;

import React from 'react';

import Button from './Button';
const List = ({ tasks }) => {
    return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
      <Button text="Добавить задачу" />
    </div>
  );
    import React from 'react';

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;

};

export default List;

import React from 'react';
import List from './List';

const App = () => {
  const tasks = [
    { id: 1, task: 'coding' },
    { id: 2, task: 'eat' },
    { id: 3, task: 'sleep' },
  ];

  return (
    <div>
      <List tasks={tasks} />
    </div>
  );
};

export default App;
