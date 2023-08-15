import React from "react";
import { Input, Row, Table, Button } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <td scope="row">
    <Input
      type="checkbox"
      id={todo.id}
      checked={todo.isSelect}
      onChange={() => {
        toggleSelect(todo.id);
      }}
    />
    </td>
    <td>{todo.time.toDateString()}</td>
    <td>{todo.text}</td>
    <td>
      <Button
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </td>
  </tr>
);

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {todos.map(todo => (
            <RowItem 
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
            />
        ))}
    </tbody>
  </Table>
);

export default TableView;
