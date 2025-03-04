import React from "react";
import { toast } from 'react-toastify';
class InputList extends React.Component {
   state={
         title: ""
   }
   handleOnChange = (event) => {
    this.setState({
        title: event.target.value
    })}
    handleOnClick = () => {
        if(this.state.title === ""){
            toast.error("Please enter your job");
            return;
        }
        let {title} = this.state;
        this.props.addTodo({
            id: Math.floor(Math.random()*1000),
            title: title
        })
        this.setState({
            title: ""
        })
        
    }
    render(){
        
        return (
            <>
            <input type="text" placeholder="Enter your job" value={this.state.title} onChange={(event)=>{this.handleOnChange(event)}}></input>
            <button className="add" type="button" 
            
            onClick={()=>{this.handleOnClick()}}
            >Add</button>
            </>
        )
    }
}
export default InputList;