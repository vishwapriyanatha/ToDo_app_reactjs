import React, {Component} from "react";
import TodoItems from "./TodoItems";
import Modal from 'react-bootstrap/Modal'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            show: false,

        };
        this.addItem = this.addItem.bind(this);
        this.doneItem = this.doneItem.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({show: false})
    }

    handleShow() {
        this.setState({show: true})
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                status: 0
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    };

    doneItem(key) {
        let status = 1;
        this.setState({
            items: this.state.items.map(el => (el.key === key ? {...el, status} : el))
        });
    }

    render() {
        return (
            <div>
                <div className="mb-5">
                    <button className="btn btn-primary btn-sm" onClick={this.handleShow}>
                        Add Task
                    </button>
                </div>


                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="header">
                            <form onSubmit={this.addItem}>
                                <input className="mb-5 form-control" ref={(a) => this._inputElement = a}
                                       placeholder="Enter task">
                                </input>
                                <div className="row">
                                    <div className="row col-sm-6">
                                        <button className="btn btn-success btn-sm" type="submit">Add Task</button>
                                    </div>
                                    <div className="row col-sm-6">
                                        <button className="btn btn-info btn-sm" type="button"
                                                onClick={this.handleClose}>Close
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>


                <TodoItems entries={this.state.items} doneTodo={this.doneItem}/>
            </div>
        );
    }
}


export default List;