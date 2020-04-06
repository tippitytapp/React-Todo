import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            item=""
        };
    }
    inputChangeHandler = event =>{
        this.setState({[e.target.name]: e.target.value})
    }
    // addItemButton = event =>{
    //     e.preventDefault();
    //     this.setState({item: ""});
    // }
    render(){
        console.log("my form is rendering");
        return(
            <form>
                <input type="text" name="item" value={this.state.item} onChange={this.inputChangeHandler} />
                <button>Add Item</button>
            </form>
        )
    }
}

export default TodoForm;