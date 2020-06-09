import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    
    state = {
        newItem: "",
    }

    // Event Handlers
    onSubmitHandler = (e) => {
        e.preventDefault();
        if(this.props.editItem) {
            this.props.editItem(this.props.itemIndex,this.state.newItem)
        } else {
            this.props.addItemHandler(this.state.newItem);
        }
        this.setState({newItem: ""});
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        return(
            this.props.editItem ? 
                <form 
                    className="TodoItem" 
                    onSubmit={this.onSubmitHandler} >

                    <input 
                        id="newItem"
                        name="newItem"
                        onChange={this.onChangeHandler}
                        placeholder="Edit Item.."
                        type="text"/>
                    <button>Edit Todo</button>
                </form> 
                :
                <form 
                    className="TodoItem" 
                    onSubmit={this.onSubmitHandler} >

                    <label htmlFor="newItem">New Todo</label>
                    <input 
                        id="newItem"
                        name="newItem"
                        onChange={this.onChangeHandler}
                        placeholder="New Todo"
                        type="text"/>
                    <button>Add Todo</button>
                </form>
            )
    }
}

export default TodoItem;