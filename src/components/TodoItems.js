import React, {Component} from "react";

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    doneToDo(key) {
        this.props.doneTodo(key);
    }

    createTasks(item) {
        return <button type="button" onClick={() => this.doneToDo(item.key)}
                       className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                {item.text}
            </div>
            {(item.status) ? <span className="badge bg-success rounded-pill">Done</span> :
                <span className="badge bg-primary rounded-pill">To-Do</span>}</button>

    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <div className="list-group">
                {listItems}
            </div>
        );
    }
};

export default TodoItems;