import React, {Component} from 'react';
import Todoitem from "./Todoitem";

class Todolist extends Component {
    render() {
        const {items,handelEdit,handelDelete} = this.props;
        return (
            <ul className="list-group">
                {items.map(item => {
                        return (
                            <Todoitem key={item.id} title={item.title}
                           handelEdit={()=> handelEdit(item.id)} handelDelete={()=>handelDelete(item.id)} />
                        );
                    }
                )
                }
            </ul>
        );
    }
}

export default Todolist;