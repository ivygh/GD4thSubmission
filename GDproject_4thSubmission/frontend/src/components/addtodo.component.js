import axios from "axios";
import React, { Component } from "react";

export default class AddTodo extends Component {

    constructor(props){
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            description:'',
            responsible:'',
            priority:'',
            isComplited: false
        }
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeResponsible(e){
        this.setState({
            responsible: e.target.value
        })
    }

    onChangePriority(e){
        this.setState({
            priority: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        console.log(this.state.description);
        console.log(this.state.responsible);
        console.log(this.state.priority);
        console.log(this.state.isComplited);

        const newTodo = {
            description: this.state.description, 
            responsible: this.state.responsible, 
            priority: this.state.priority, 
            isComplited: this.state.isComplited
        }

        axios.post('http://localhost:8081/add', newTodo)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));


        this.setState({
            description:'',
            responsible:'',
            priority:'',
            isComplited: false
        })
    }

    render() {

        return (
            <div className="container">
                <div className="col-lg-6">
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description:</label>
                    <input type="text" class="form-control col-lg-4" value={this.state.description} onChange={this.onChangeDescription}/>
                </div>
               
                <div class="form-group">
                    <label for="exampleInputEmail1">Responsible:</label>
                    <input type="text" class="form-control col-lg-4" value={this.state.responsible} onChange={this.onChangeResponsible}/>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Priority:</label>
                    <input type="text" class="form-control col-lg-4" value={this.state.priority} onChange={this.onChangePriority}/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        )
    }
}