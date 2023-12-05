import axios from "axios";
import React,{ Component } from "react";
import { Link } from "react-router-dom";


const Todo = props =>(
    <tr>
    <td>{props.todo.description}</td>
    <td>{props.todo.responsible}</td>
    <td>{props.todo.priority}</td>
    <td>
        <Link to={"/edit/"+props.todo._id} className="btn btn-success">Edit</Link>
    </td>
    </tr>
    )

export default class TodoLists extends Component{

    constructor(props){
        super(props);
        this.state = {todos: []};
    }


    componentDidMount(){
        axios.get('http://localhost:8081/')
        .then(res=>this.setState({todos:res.data}))
        .catch(err=>console.log(err));
    }

    componentDidUpdate(){
        axios.get('http://localhost:8081/')
        .then(res=>this.setState({todos:res.data}))
        .catch(err=>console.log(err));
    }

    todoLists(){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i}/>
        })
    }


    render(){

        return(
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Responsible</th>
      <th scope="col">Priority</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
            {this.todoLists()}
  </tbody>
</table>
        )
    }
}