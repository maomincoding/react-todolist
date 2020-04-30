import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import TodoList from './views/Todolist'
import TodoList from './views/newTodolist/TodoList'

function App() {
  return (
    <div className="App">
        <TodoList></TodoList>
    </div>
  );
}

export default App;
