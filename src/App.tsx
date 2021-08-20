import React, { Component } from 'react';
import './App.css';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

import DataTables from './components/Datatable';
import Selection from './components/Selection';
import Randomise from './components/Randomise';
import Datachart from './components/Datachart';
// const _ = require('lodash');

// eslint-disable-next-line
const productA = [
  {
    date: '"2021-08-20T18:30:00.000Z"',
    srNo: 20,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-19T18:30:00.000Z"',
    srNo: 19,
    product: 'A',
    value: 30,
  },
  {
    date: '"2021-08-18T18:30:00.000Z"',
    srNo: 18,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-17T18:30:00.000Z"',
    srNo: 17,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-16T18:30:00.000Z"',
    srNo: 16,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-15T18:30:00.000Z"',
    srNo: 15,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-14T18:30:00.000Z"',
    srNo: 14,
    product: 'A',
    value: 20,
  },
  {
    date: '"2021-08-13T18:30:00.000Z"',
    srNo: 13,
    product: 'A',
    value: 17,
  },
  {
    date: '"2021-08-12T18:30:00.000Z"',
    srNo: 12,
    product: 'A',
    value: 10,
  },
  {
    date: '"2021-08-11T18:30:00.000Z"',
    srNo: 11,
    product: 'A',
    value: 20,
  },
  {
    date: '"2021-08-10T18:30:00.000Z"',
    srNo: 10,
    product: 'A',
    value: 25,
  },
  {
    date: '"2021-08-09T18:30:00.000Z"',
    srNo: 9,
    product: 'A',
    value: 20,
  },
  {
    date: '"2021-08-08T18:30:00.000Z"',
    srNo: 8,
    product: 'A',
    value: 30,
  },
  {
    date: '"2021-08-07T18:30:00.000Z"',
    srNo: 7,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-06T18:30:00.000Z"',
    srNo: 6,
    product: 'A',
    value: 20,
  },
  {
    date: '"2021-08-05T18:30:00.000Z"',
    srNo: 5,
    product: 'A',
    value: 20,
  },
  {
    date: '"2021-08-04T18:30:00.000Z"',
    srNo: 4,
    product: 'A',
    value: 20,
  },
  {
    date: '"2021-08-03T18:30:00.000Z"',
    srNo: 3,
    product: 'A',
    value: 15,
  },
  {
    date: '"2021-08-02T18:30:00.000Z"',
    srNo: 2,
    product: 'A',
    value: 25,
  },
  {
    date: '"2021-08-01T18:30:00.000Z"',
    srNo: 1,
    product: 'A',
    value: 30,
  },
];
const productB = [
  {
    date: '"2021-08-20T18:30:00.000Z"',
    srNo: 20,
    product: 'B',
    value: 15,
  },
  {
    date: '"2021-08-19T18:30:00.000Z"',
    srNo: 19,
    product: 'B',
    value: 30,
  },
  {
    date: '"2021-08-18T18:30:00.000Z"',
    srNo: 18,
    product: 'B',
    value: 25,
  },
  {
    date: '"2021-08-17T18:30:00.000Z"',
    srNo: 17,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-16T18:30:00.000Z"',
    srNo: 16,
    product: 'B',
    value: 15,
  },
  {
    date: '"2021-08-15T18:30:00.000Z"',
    srNo: 15,
    product: 'B',
    value: 15,
  },
  {
    date: '"2021-08-14T18:30:00.000Z"',
    srNo: 14,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-13T18:30:00.000Z"',
    srNo: 13,
    product: 'B',
    value: 17,
  },
  {
    date: '"2021-08-12T18:30:00.000Z"',
    srNo: 12,
    product: 'B',
    value: 10,
  },
  {
    date: '"2021-08-11T18:30:00.000Z"',
    srNo: 11,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-10T18:30:00.000Z"',
    srNo: 10,
    product: 'B',
    value: 25,
  },
  {
    date: '"2021-08-09T18:30:00.000Z"',
    srNo: 9,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-08T18:30:00.000Z"',
    srNo: 8,
    product: 'B',
    value: 30,
  },
  {
    date: '"2021-08-07T18:30:00.000Z"',
    srNo: 7,
    product: 'B',
    value: 15,
  },
  {
    date: '"2021-08-06T18:30:00.000Z"',
    srNo: 6,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-05T18:30:00.000Z"',
    srNo: 5,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-04T18:30:00.000Z"',
    srNo: 4,
    product: 'B',
    value: 20,
  },
  {
    date: '"2021-08-03T18:30:00.000Z"',
    srNo: 3,
    product: 'B',
    value: 15,
  },
  {
    date: '"2021-08-02T18:30:00.000Z"',
    srNo: 2,
    product: 'B',
    value: 25,
  },
  {
    date: '"2021-08-01T18:30:00.000Z"',
    srNo: 1,
    product: 'B',
    value: 30,
  },
];
// eslint-disable-next-line

class MyComponent extends Component<
  {},
  { startDate: any; endDate: any; data: any; productValue: any }
> {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      data: null,
      productValue: null,
    };
  }

  minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth());
  maxDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  handleSelect = (date) => {
    const startDay = JSON.stringify(date.value[0]);
    const endDay = JSON.stringify(date.value[1]);
    const productAstartDate = productA.find((day) => day.date === startDay);
    const productAendDate = productA.find((day) => day.date === endDay);
    const productBstartDay = productB.find((day) => day.date === startDay);
    const productBendDay = productB.find((day) => day.date === endDay);
    // let dataB;
    if (
      productAstartDate &&
      productAendDate &&
      productBstartDay &&
      productBendDay
    ) {
      const dataA = productA.filter(
        (datas) =>
          datas.srNo >= productAstartDate?.srNo + 1 &&
          datas.srNo - 1 <= productAendDate?.srNo
      );

      const dataB = productB.filter(
        (datas) =>
          datas.srNo >= productBstartDay?.srNo + 1 &&
          datas.srNo - 1 <= productBendDay?.srNo
      );

      return this.setState({ data: [...dataA, ...dataB] });
      // this.state.data.push(...dataA);
      // this.state.data.push(...dataB);
    }

    // console.log('dataaa ', this.state.data);
    // console.log('dataaa B', dataB);
    // console.log('Start Date', startDay); // native Date object
    // console.log('End Date', endDay); // native Date object
    // console.log('srNo==>', productAstartDate?.srNo);
    // console.log('srNo2==>', productNoB?.srNo);
    // return [dataA, dataB];
  };

  setValue = (e) => {
    console.log(e.target.value);
    let Data = this.state.data;
    const productData = Data.filter((data) => data.product === e.target.value);
    console.log(productData);
    return this.setState({ productValue: productData });
  };
  setAllValue = (e) => {
    console.log(e.target.value);
    let Data = this.state.data;
    console.log(Data);

    return this.setState({ productValue: Data });
  };

  tableDate(startDay) {}
  render() {
    return (
      <div className='dateSelector'>
        <DateRangePickerComponent
          placeholder='Enter Date Range'
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          min={this.minDate}
          max={this.maxDate}
          onChange={this.handleSelect}
          onClick={this.handleSelect}
        ></DateRangePickerComponent>
        <Selection data={this.state.data} setValue={this.setValue} />
        <Datachart data={this.state.productValue} />
        <DataTables data={this.state.productValue} />
        <Randomise data={this.state.data} setAllValue={this.setAllValue} />
      </div>
    );
  }
}

export default MyComponent;
