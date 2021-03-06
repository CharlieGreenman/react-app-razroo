import React, {Component} from "react";
import { connect } from "react-redux";
import {showBlock, hideBlock} from "../../actions/showHide.js"
// require("../../scss/core.scss");

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.hideBlock = this.hideBlock.bind(this);
    this.showBlock = this.showBlock.bind(this);
    this.renderColorBlock = this.renderColorBlock.bind(this);
  };

  handleClick(e){
    const{dispatch} = this.props;
    dispatch(showBlock());
    this.renderColorBlock();
  }
  hideBlock(){
    const{dispatch} = this.props;
    dispatch(hideBlock());
  }
  showBlock(){
    const{dispatch} = this.props;
    dispatch(showBlock());
  }
  renderColorBlock(){
    const{environment} = this.props;
    if(environment.show === true){
        return(
          <div className = "works">
            <button id="show-block" type="button" className="show-hide-button" onClick={this.showBlock}>show</button>
            <button id="hide-block" type="button" className="show-hide-button" onClick={this.hideBlock}>Hide</button>
            <div id = "color-block">Color Block</div>
          </div>
        );
    }
    return(
      <div className = "works">
        <button id="show-block" type="button" className="show-hide-button" onClick={this.showBlock}>show</button>
        <button id="hide-block" type="button" className="show-hide-button" onClick={this.hideBlock}>Hide</button>
      </div>
    );
  }
    render() {
      return(
        <div>
        {this.renderColorBlock()}
        </div>
      );
    }
}
function mapStateToProps(state) {
  const {environment} = state;
  return{
    environment
  }
}

export default connect(mapStateToProps)(Form);
