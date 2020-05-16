import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";

export  default class Todoitem extends Component {
    render() {
        const {title,handelEdit,handelDelete} = this.props;
        // console.log(item.title);
        return (
            <li className="list-group-item text-sm-center">{title}
            <div className="todo-icon">
                <span className="mx-2 text-success" onClick={handelEdit}>
                    <FontAwesomeIcon icon={faEdit} /></span>

                <span className="mx-2 text-danger" onClick={handelDelete}>
                    <FontAwesomeIcon icon={faTrash} /></span>
            </div>
            </li>
        );
    }
}
