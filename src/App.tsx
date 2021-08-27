import React, { Component } from 'react';
import './App.css';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

import DataTables from './components/Datatable';
import Selection from './components/Selection';
import Randomise from './components/Randomise';
import Datachart from './components/Datachart';
import moment from 'moment';

const now = moment();

// eslint-disable-next-line

class MyComponent extends Component<
  {},
  {
    startDate: any;
    endDate: any;
    data: any;
    productValue: any;
    start: any;
    end: any;
    startDay: any;
    endDay: any;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      data: null,
      productValue: null,
      start: null,
      end: null,
      startDay: null,
      endDay: null,
    };
  }

  minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth());
  maxDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 2
  );

  handleSelect = (date) => {
    const startDate = moment(date.value[0].toString());
    this.setState({ start: startDate.isBefore(now) });
    this.setState({ startDay: startDate });
    const endDate = moment(date.value[1].toString());
    this.setState({ end: endDate.isAfter(now) });
    this.setState({ endDay: endDate });

    const daysDiffrence = now.diff(startDate, 'days');

    const ProductA_data: any[] = [];
    // eslint-disable-next-line
    const ProductB_data: any[] = [];
    if (this.state.start !== true || this.state.end !== true) {
      console.log('Not Valid Date');
      return this.setState({ data: 'Not Valid Date' });
    }
    for (let i = 0; i <= daysDiffrence; i++) {
      const loopDate = moment(startDate)
        .add(i, 'days')
        .startOf('day')
        .format('DD-MM-YYYY');
      const data = {
        date: loopDate,
        product: 'A',
        value: Math.floor((Math.random() + 0.1) * 30),
      };
      ProductA_data.push(data);
    }
    for (let i = 0; i <= daysDiffrence; i++) {
      const loopDate = moment(startDate)
        .add(i, 'days')
        .startOf('day')
        .format('DD-MM-YYYY');
      const data = {
        date: loopDate,
        product: 'B',
        value: Math.floor((Math.random() + 0.1) * 30),
      };
      ProductB_data.push(data);
    }
    console.log(ProductA_data);

    return this.setState({ data: [...ProductA_data, ...ProductB_data] });
  };

  selectProduct = (e) => {
    console.log(e.target.value);
    let Data = this.state.data;
    const productData = Data.filter((data) => data.product === e.target.value);
    const lastElement = productData[productData.length - 1];
    const secondLastElement = productData[productData.length - 2];

    const daysDiffrence = this.state.endDay.diff(now, 'days');

    let newFutureData: any[] = [];
    if (lastElement.value > secondLastElement.value) {
      for (let i = 1; i <= daysDiffrence + 1; i++) {
        const loopDate = moment()
          .add(i, 'days')
          .startOf('day')
          .format('DD-MM-YYYY');
        const positivedata = {
          date: loopDate,
          product: e.target.value,
          positiveValue: lastElement.value + lastElement.value*(i * 0.05),
        };
        newFutureData.push(positivedata);

        const negativedata = {
          date: loopDate,
          product: e.target.value,
          negativeValue: lastElement.value - lastElement.value*(i * 0.05),
        };
        

        newFutureData.push(negativedata);
      }
    } else {
      for (let i = 1; i <= daysDiffrence + 1; i++) {
        const loopDate = moment()
          .add(i, 'days')
          .startOf('day')
          .format('DD-MM-YYYY');
        const negativedata = {
          date: loopDate,
          product: e.target.value,
          negativeValue: lastElement.value - lastElement.value*(i * 0.05),

        };
        newFutureData.push(negativedata);
        const positivedata = {
          date: loopDate,
          product: e.target.value,
          positiveValue: lastElement.value + lastElement.value*(i * 0.05),

        };
        newFutureData.push(positivedata);
      }
    }
    return this.setState({ productValue: [...productData, ...newFutureData] });
  };

  setAllValue = (e) => {
    console.log(e.target.value);
    let Data = this.state.data;
    // console.log(Data);

    return this.setState({ productValue: Data });
  };

  render() {
    return (
      <div className='dateSelector'>
        <DateRangePickerComponent
          placeholder='Enter Date Range'
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          min={this.minDate}
          max={this.maxDate}
          format='dd/MM/yy'
          onChange={this.handleSelect}
        />
        <Selection data={this.state.data} selectProduct={this.selectProduct} />
        <Datachart data={this.state.productValue} />
        <DataTables data={this.state.productValue} />
        <Randomise data={this.state.data} setAllValue={this.setAllValue} />
      </div>
    );
  }
}

export default MyComponent;
