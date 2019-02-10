import React from 'react';
import {LineChart} from 'react-easy-chart';

const MyChart = ({data}) => (
    <div>
     <LineChart
    xType={'text'}
    axes
    width={350}
    height={250}
    interpolate={'cardinal'}
    data={[
      [
        { x: 'bob', y: 20 },
        { x: 'Wed', y: 33 },
        { x: 'Thu', y: 45 },
        { x: 'Fri', y: 15 }
      ], [
        { x: 'Mon', y: 10 },
        { x: 'Tue', y: 15 },
        { x: 'Wed', y: 13 },
        { x: 'Thu', y: 15 },
        { x: 'Fri', y: 10 }
      ]
    ]}
  />
    </div>
)

export default MyChart