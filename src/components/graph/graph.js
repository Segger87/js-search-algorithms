import React from 'react';
import {LineChart} from 'react-easy-chart';

const MyChart = ({
  linear,
  binary
}) => {
  let linearArray = [];
  let binaryArray = [];

  linear.map(result => {
    let linearObject = { x: result.word , y: result.comparisons }
    linearArray.push(linearObject);
  })

  binary.map(result => {
    let binaryObject = { x: result.word , y: result.comparisons.count }
    binaryArray.push(binaryObject);
  })
  
  return(
    <div>
    <LineChart
       xType={'text'}
       axes
       width={350}
       height={250}
       interpolate={'cardinal'}
       data={[
           linearArray, binaryArray
    ]}
  />
   </div>
  )

}


export default MyChart