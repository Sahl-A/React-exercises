import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    state = {
        listItems: [
            {value: 'test1', edit: false},
            {value: 'test2', edit: false},
        ]
    }

    // This handler to be used in the TodoItem component
    addItemHandler = (newItem) => {
        const listItems = [...this.state.listItems];
        listItems.push({value: newItem, edit: false});
        this.setState({listItems: listItems});
    }

    // To delete item
    deleteItemHandler = (index) => {
        const listItems = [...this.state.listItems];
        listItems.splice(index, 1);
        this.setState({listItems: listItems});
    }

    // To edit Item
    editItemClickHandler = (index) => {
        const listItems = [...this.state.listItems];
        const newItem = {...listItems[index]};
        newItem.edit = true; 

        listItems[index] = newItem;
        this.setState({listItems: listItems});
    }

    editItemDataHandler = (index,editedItem) => {
        const listItems = [...this.state.listItems];
        const newItem = {value: editedItem, edit: false}
        listItems.splice(index, 1,newItem);
        this.setState({listItems: listItems});
    }

    render() {
        let items = (
            <React.Fragment>
                {this.state.listItems.map((item,i) => (
                    <li className="TodoList-item" key={i} id={i}>
                        {
                        this.state.listItems[i].edit ? 
                            <TodoItem itemIndex={i} editItem={(i,newItem)=>this.editItemDataHandler(i,newItem)}/>
                            :
                            <React.Fragment>
                                <p>{item.value}</p>
                                <div className="TodoList-item__options">
                                    <span onClick={()=> this.editItemClickHandler(i)}>Edit</span>
                                    <span onClick={()=> this.deleteItemHandler(i)}>X</span>
                                </div> 
                            </React.Fragment>
                        }
                    </li>
                ))}
            </React.Fragment>
        );

        return(
            <section className="TodoList">
                <div className="TodoList-title">
                    <h1>Todo List!</h1>
                    <p>A simple React Todo List App</p>
                </div>
                <hr/>
                <ul className="TodoList-list">
                    {items}
                </ul>
                <TodoItem addItemHandler={this.addItemHandler}/>
            </section>
        )
    }
}

export default TodoList;