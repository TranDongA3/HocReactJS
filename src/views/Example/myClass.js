import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "developer", salary: "500$" },
      { id: "abcJob2", title: "tester", salary: "600$" },
      { id: "abcJob3", title: "manager", salary: "1000$" },
    ],
  };
  addJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteJob = (id) => {
  this.setState({
    arrJobs: this.state.arrJobs.filter((job) => job.id !== id),
  })
  };


  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} />
        <ChildComponent name={"Dong"} age={"25"} arrJobs={this.state.arrJobs} 
        deleteJob={this.deleteJob}/>
      </>
    );
  }
}

export { MyComponent };
