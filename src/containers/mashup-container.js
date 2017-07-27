import React from "react";

import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

//Import components
import Mashup from "../components/mashup.js";


class MashupContainer extends React.Component {
  constructor() {
    super();
      this.state = {
        input: ""
      };
      autoBind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  render() {
    return (
      <Mashup input={this.state.input} text={this.props.text} handleChange={this.handleChange} handleClick={this.props.changeText}/>
    )
  }
}

//map our data fromm store to props
const mapStateToProps = (state) => {
  return state;
}

//take all our (actions = actionCreators) and map to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

//connect store to MemeContainer
export default connect(mapStateToProps, mapDispatchToProps)(MashupContainer);
