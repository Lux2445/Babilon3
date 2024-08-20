import React, { Component } from 'react';

class MultiSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      step1: 1,
      step2: 1,
      step3: 1,
    };
  }

  handleChange1 = (event) => {
    this.setState({ value1: Number(event.target.value) });
  };

  handleChange2 = (event) => {
    this.setState({ value2: Number(event.target.value) });
  };

  handleChange3 = (event) => {
    this.setState({ value3: Number(event.target.value) });
  };

  handleStepChange1 = (event) => {
    this.setState({ step1: Number(event.target.value) });
  };

  handleStepChange2 = (event) => {
    this.setState({ step2: Number(event.target.value) });
  };

  handleStepChange3 = (event) => {
    this.setState({ step3: Number(event.target.value) });
  };

  handleInputChange1 = (event) => {
    const value = Math.min(Number(event.target.value), 100);
    this.setState({ value1: value });
  };

  handleInputChange2 = (event) => {
    const value = Math.min(Number(event.target.value), 90);
    this.setState({ value2: value });
  };

  handleInputChange3 = (event) => {
    const value = Math.min(Number(event.target.value), 90);
    this.setState({ value3: value });
  };

  render() {
    const { value1, value2, value3, step1, step2, step3 } = this.state;

    return (
      <div>
        <div className='platform_input'>
          <input type="range" min="1" max="100" value={value1} step={step1} onChange={this.handleChange1} className='slider' />
          <input type="number" value={value1} onChange={this.handleInputChange1} min="1" max="100" className='platform_input_item' />
        </div>

        <div className='platform_input'>
          <input type="range" min="1" max="90" value={value2} step={step2} onChange={this.handleChange2} className='slider'/>
          <input type="number" value={value2} onChange={this.handleInputChange2} min="1" max="90" className='platform_input_item' />
        </div>

        <div className='platform_input'>
          <input type="range" min="1" max="90" value={value3} step={step3} onChange={this.handleChange3} className='slider' />
          <input type="number" value={value3} onChange={this.handleInputChange3} min="1" max="90" className='platform_input_item'/>
        </div>
      </div>
    );
  }
}

export default MultiSlider;
