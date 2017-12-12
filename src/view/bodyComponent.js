import React from "react";

import "./css/bodyComponent.css";
import ToDoItems from "./toDoItems";

export default class BodyComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    let item = document.getElementById("input").value;

    let itemArray = this.state.items;

    if (item !== "") {
      itemArray.push(item);
      this.setState({
        items: itemArray
      });
    }

    console.log(itemArray);
  }

  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyComponent-left">
          <div className="BodyComponent-leftheader"> ADD EVENT</div>
          <div className="BodyComponent-form">
            <input id="input" placeholder="enter task" />
            <button type="submit" onClick={() => this.addItem()}>
              add
            </button>

            <div>
              <ToDoItems entries={this.state.items} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
