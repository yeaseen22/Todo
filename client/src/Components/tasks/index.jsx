import React, { Component } from "react";
import shortid from "shortid";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// Components
import TableView from "../tableView";
import ListView from "../listView";
import CreateTodoForm from "../create-todo-form";
import Controllers from "../controllers";

class Todos extends Component {
  state = {
    todos: [
      {
        id: "1345",
        text: "main todos text",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "1345987",
        text: "main todo text",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoid) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoid);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };
  toggleComplete = (todoid) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoid);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isComplete = false;

    const todos = [todo, ...this.state.todos];

    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter(todo => !todo.isSelect);
    this.setState({todos});
  };
  
  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.isComplete);
    this.setState({todos});
  };

  reset = () => {
    this.setState({
      filter: 'all',
      searchTerm: '',
      view: 'list',
      isOpenTodoForm: false,
    })
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  // change view
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos)
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controllers
            term={this.state.searchTerm}
            view={this.state.view}
            toggleForm={this.toggleForm}
            handleSearch={this.handleSearch}
            handleFilter={this.handleFilter}
            changeView={this.changeView}
            clearSelected={this.clearSelected}
            clearCompleted={this.clearCompleted}
            reset={this.reset}
        />

        <div>{this.getView()}</div>

        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
