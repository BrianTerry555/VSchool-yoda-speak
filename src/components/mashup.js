import React from "react";


class Mashup extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 input">
              <h1>Yoda Speak</h1>
              <h3>text converter</h3>
              <div className="input-text">
                <input onChange={(event)=>{this.props.handleChange(event);}} type="text" className="form-control input-form" value={this.props.input} placeholder="Input sentence here"/>
                <button onClick={() => {this.props.handleClick(this.props.input);}} className="input-button">Yodify!!!</button>
              </div>
              <div className="output">
                <h4>{this.props.text}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Mashup;
