import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cls = require('classnames');


export default class Bubble extends Component {
  static propTypes = {
    r: PropTypes.number.isRequired,
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,    
    onClick: PropTypes.func,
    hover: PropTypes.bool,
  };

  static defaultProps = {
    onClick: ()=>{},
    hover: false,
  }


  render() {
    return (
        <circle 
          className={cls("bubbles-bubble", {hover: this.props.hover})}
          r={this.props.r}
          cx={this.props.cx}
          cy={this.props.cy}
          fill={this.props.fill}
          onClick={this.props.onClick}
          onMouseEnter={()=>{this.props.onMouseEnter()}}
          onMouseLeave={()=>{this.props.onMouseLeave()}}
          />
      )
  }
}