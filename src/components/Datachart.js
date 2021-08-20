import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default class Datachart extends PureComponent {
  render() {
    if (this.props.data) {
      const pdata = this.props.data;
      return (
        <div>
          <div className='lineChart'>
            <ResponsiveContainer margin={{ right: 300 }} aspect={3}>
              <LineChart data={pdata}>
                <XAxis dataKey='date' interval={'preserveStartEnd'} />
                <YAxis dataKey='value'></YAxis>
                <Tooltip />
                <Line dataKey='value' />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
