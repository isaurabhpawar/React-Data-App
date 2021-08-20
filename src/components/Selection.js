import React, { PureComponent } from 'react';

export default class Selection extends PureComponent {
  render() {
    if (this.props.data) {
      return (
        <div>
          <center>
            <label>SELECT PRODUCT</label>
            <br></br>
            <button
              onClick={this.props.setValue}
              onChange={this.props.handleSelect}
              value={'A'}
            >
              A
            </button>
            <button
              onClick={this.props.setValue}
              onChange={this.props.handleSelect}
              value={'B'}
            >
              B
            </button>
          </center>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
