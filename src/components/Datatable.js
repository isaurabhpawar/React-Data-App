import React, { PureComponent } from 'react';
import DataTable from 'react-data-table-component';
import Selection from './Selection';
import Randomise from './Randomise';
import Datachart from './Datachart';
const columns = [
  {
    name: 'Date',
    selector: 'date',
  },
  {
    name: 'Product',
    selector: 'product',
    sortable: true,
  },
  {
    name: 'Value',
    selector: 'value',
  },
];
export default class DataTables extends PureComponent {
  render() {
    // console.log(this.props.data);
    if (this.props.data) {
      return (
        <div>
          <Selection />
          <Datachart />
          <div className='dataTables'>
            <DataTable
              title='Product Data'
              columns={columns}
              data={this.props.data}
            />
          </div>
          <Randomise />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
