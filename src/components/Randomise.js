import React, { PureComponent } from 'react';

export default class Randomise extends PureComponent {
  render() {
    if (this.props.data) {
      if (this.props.data === 'Not Valid Date') {
        return (
          <div>
            <p>Select Start Date From Past and End Date from future</p>
          </div>
        );
      }
      return (
        <div>
          <center>
            <label>Re-Randomise Data</label>
            <br></br>

            <button
              onClick={this.props.setAllValue}
              onChange={this.props.handleSelect}
              value={'ALL'}
            >
              Randomise
            </button>
          </center>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
