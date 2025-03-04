import React from "react";

class ChildComponent extends React.Component {
  state = {
    name: "Show item",
  };

  handleOnclick = (event) => {
    if (document.querySelector(".buttonValue").value === "Hide item") {
      this.setState({
        name: "Show item",
      });
      document.querySelector(".job-list").style.display = "none";
    } else {
      this.setState({
        name: "Hide item",
      });
      document.querySelector(".job-list").style.display = "block";
    }
  };
  handleDelete = (id) => {
    alert(id);
    this.props.deleteJob(id);
  };

  render() {
    console.log(this.props);
    let { name, age, arrJobs } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="job-list" style={{ display: "none" }}>
          {arrJobs.map((job) => {
            return (
              <div key={job.id}>
                <div>
                  {name} - {age} - {job.title} - {job.salary} <></>{" "}
                  <button
                    onClick={() => {
                      this.handleDelete(job.id);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <input
          className="buttonValue"
          type="button"
          value={this.state.name}
          onClick={this.handleOnclick}
        ></input>
      </>
    );
  }
}

export default ChildComponent;
