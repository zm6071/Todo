import React, {Component} from 'react';
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuidv4} from "uuid";

class App extends Component {
    state = {
        items: [],
        item: "",
        id: uuidv4(),
    }
    handelSubmit = (e) => {
        e.preventDefault();
         // console.log(this.state.item);
        const newItem={
            title:this.state.item,
            // id:this.state.item
        };
        const updateItems=[...this.state.items,newItem];

        this.setState({
            items:updateItems,
            item:"",
            id: uuidv4()
        });
        // console.log(updateItems);
    }

    handelChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            item: e.target.value
        });
    }
    handelEdit=(e)=>{

    }

    handelDelete=(e)=>{

    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10 mx-auto mt-5">
                    <Todoinput handelChange={this.handelChange} handelSubmit={this.handelSubmit}
                               item={this.state.item}/>
                    <Todolist items={this.state.items} handelDelete={this.handelDelete.id}
                              handelEdit={this.handelEdit.id}/>
                </div>
            </div>
        </div>
    );
}
}

export default App;