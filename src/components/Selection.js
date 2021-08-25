import React, { PureComponent } from 'react';

export default class Selection extends PureComponent {
  setValue = (e) => {
    console.log(e.target.value);
    let Data = this.props.data;
    const productData = Data.filter((data) => data.product === e.target.value);
    console.log(productData);
    return this.setState({ productValue: productData });
  };

  render() {
    if (this.props.data) {
      if (this.props.data === 'Not Valid Date') {
        return <div></div>;
      }
      return (
        <div>
          <center>
            <label>SELECT PRODUCT</label>
            <br></br>
            <button
              onClick={this.props.selectProduct}
              onChange={this.props.handleSelect}
              value={'A'}
            >
              A
            </button>
            <button
              onClick={this.props.selectProduct}
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
