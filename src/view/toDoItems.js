import React from "react";

export default class ToDoItems extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item, index) {
    return <li key={index}>{item}</li>;
  }

  render() {
    const todoEntries = this.props.entries;

    return (
      <div>
        {todoEntries.map((item, index) => {
          return this.createTasks(item, index);
        })}
      </div>
    );
  }
}
