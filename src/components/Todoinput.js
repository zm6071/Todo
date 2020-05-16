import React, {Component} from 'react';

class Todoinput extends Component {
    render() {
        const {item,handelSubmit,handelChange}=this.props;
        return (
            <div className="card">
                <div className="card-body">
                  <form onSubmit={handelSubmit}>
                      <input type="text" className="form-control" placeholder="Enter a item"
                     onChange={handelChange} value={item} />
                      <button type="submit" className="btn btn-success btn-block mt-3" >Add</button>
                  </form>
                </div>
            </div>
        );
    }
}

export default Todoinput;