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
        <Transition
          in={this.state.show}
          timeout={{ enter: 2000, exit: 50 }}
          enter={true}
          exit={true}
          onEnter={node => console.log("Enter")}
          onExit={node => console.log("Exit")}
        >
          {state => (
            <div className={`square square-${state}`}>
              {`sqaure square-${state}`}
            </div>
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
