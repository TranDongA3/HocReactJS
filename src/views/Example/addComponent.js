import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleCode = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleClick = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.title === "" || this.state.salary === "") {
      alert("Please enter title and salary");
    } else {
      this.props.addJob({
        id: Math.random().toString(36).substr(2, 9),
        title: this.state.title,
        salary: this.state.salary,
      });
    }
  };

  render() {
    return (
      <>
        <label>Job's Title</label>
        <input
          className="title"
          value={this.state.title}
          onChange={(event) => this.handleCode(event, "title")}
        />
        <label>Salary</label>
        <input
          className="salary"
          value={this.state.salary}
          onChange={(event) => this.handleCode(event, "salary")}
        />

        <button type="submit" onClick={(event) => this.handleClick(event)}>
          Submit
        </button>
      </>
    );
  }
}

export default AddComponent;
