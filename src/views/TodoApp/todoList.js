import React from "react";
import InputList from "./inputList";
import "./todoApp.scss";
import { toast } from "react-toastify";

class TodoList extends React.Component {
  state = {
    listTodo: [
      { id: 1, title: "Doing homework" },
      { id: 2, title: "Making video" },
      { id: 3, title: "Fixing bug" },
      { id: 4, title: "Learn English" },
    ],
    edit: {},
  };

  addTodo = (todo) => {
    let { listTodo } = this.state;

    this.setState({
      listTodo: [...listTodo, todo],
    });

    toast.success("Add job successfully");
  };

  deleteTodo = (id) => {
    let arr = this.state.listTodo.filter((item) => item.id !== id);

    this.setState({
      listTodo: arr,
    });

    toast.success("Delete job successfully");
  };

  editTodo = (todo) => {
    this.setState({
      edit: todo,
    });
  };

  render() {
    let { listTodo, edit } = this.state;
    let isEmty = Object.keys(edit).length === 0;

    return (
      <>
        <div className="container">
          <div className="input-list">
            <InputList addTodo={this.addTodo} />
          </div>
          <div className="list-todo">
            {listTodo.map((item, index) => (
              <div className="block-item" key={item.id}>
                <div className="item">
                  {edit.id === item.id ? (
                    <>
                      <span>
                        {index + 1} -{" "}
                        <input
                          value={edit.title}
                          onChange={(e) => {
                            this.setState({
                              edit: { ...edit, title: e.target.value },
                            });
                          }}
                        />
                      </span>
                      <button
                        className="save"
                        onClick={() => {
                          let updatedList = listTodo.map((t) =>
                            t.id === edit.id ? edit : t
                          );
                          this.setState({ listTodo: updatedList, edit: {} });
                          toast.success("Updated job successfully");
                        }}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        {index + 1} - {item.title}
                      </span>
                      <button
                        className="edit"
                        onClick={() => this.editTodo(item)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                  <button
                    className="delete"
                    type="button"
                    onClick={() => this.deleteTodo(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;
