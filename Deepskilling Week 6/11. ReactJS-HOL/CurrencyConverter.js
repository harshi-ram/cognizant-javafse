import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const rs = parseFloat(this.state.rupees);
    if (!isNaN(rs)) {
      const conversionRate = 90.0;
      const euroValue = rs / conversionRate;
      this.setState({ euros: euroValue.toFixed(2) });
    } else {
      this.setState({ euros: '' });
    }
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Indian Rupees (INR): </label>
            <input 
              type="text" 
              value={this.state.rupees} 
              onChange={this.handleChange} 
              placeholder="Enter amount in INR"
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <button type="submit">Convert</button>
          </div>
        </form>
        {this.state.euros !== '' && (
          <div style={{ marginTop: '10px' }}>
            <h3>Converted Value: €{this.state.euros}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
