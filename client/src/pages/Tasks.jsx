// import { useState } from 'react';
// import shortid from 'shortid';
// import Layout from '../Components/layout/Layout';
// import CreateTask from '../Components/tasks/CreateTask';
// import ShowTasks from '../Components/tasks/ShowTask';

// const Tasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [visibility, setVisibility] = useState('all');

//   const addNewTask = (text) => {
//     const task = {
//       text,
//       isCompleted: false,
//       createdAt: new Date(),
//       id: shortid.generate(),
//     };
//     setTasks([task, ...tasks]);
//   };

//   return (
//     <Layout>
//       <h1>TODO List</h1>
//       <CreateTask addNewTask={addNewTask} />
//       <ShowTasks tasks={tasks} />
//     </Layout>
//   );
// };

// export default Tasks;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Todos from "../Components/tasks";
import Layout from "../Components/layout/Layout";

const TodoApp = () => {
  return (
    <Layout>
      <Container className="my-3">
        <Row>
          <Col>
            <Todos />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default TodoApp;
