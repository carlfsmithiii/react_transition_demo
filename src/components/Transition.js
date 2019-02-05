import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "../css/App.css";

class TransitionComp extends Component {
  state = {
    show: true
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <Transition in={this.state.show} timeout={2000}>
          {state => (
            <div
              style={{
                background: "red",
                height: "100px",
                transition: "all 2s ease",
                opacity: state === "exited" || state === "exiting" ? 0 : 1
              }}
            />
          )}
        </Transition>
        <div className="showDiv" onClick={this.showDiv}>
          Show or hide
        </div>
      </div>
    );
  }
}

export default TransitionComp;