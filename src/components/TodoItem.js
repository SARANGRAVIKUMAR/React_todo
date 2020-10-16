import React, { Component } from "react";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  btnStyle = () => {
    return {
      background: "#ff0000",
      padding: "5px 9px",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      float: "right",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            onChange={this.props.markComplete.bind(this, id)}
            type="checkbox"
          />{" "}
          {""}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={this.btnStyle()}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
