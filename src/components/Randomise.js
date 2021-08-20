import React, { PureComponent } from 'react';

export default class Randomise extends PureComponent {
  render() {
    if (this.props.data) {
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
