import React, { PureComponent } from 'react';

const bmiTable = [
  { value: 17.5, label: '저체중', color: '#00B050' },
  { value: 22.5, label: '정상', color: '#92D050' },
  { value: 25.0, label: '과체중', color: '#FFFF00' },
  { value: 30.0, label: '경도비만', color: '#FFC000' },
  { value: 40.0, label: '고도비만', color: '#FF0000' }
]

class BMIGraph extends PureComponent {
  render() {
    const indicatorValues = this.props.value || []
    const rects = []
    const minValue = 14
    const maxValue = bmiTable[bmiTable.length - 1].value

    for(let i = 0 ; i < bmiTable.length ; i++) {
      const prevValue = (i === 0) ? minValue : bmiTable[i - 1].value
      const {value, color, label} = bmiTable[i]
      rects.push(<rect x={prevValue} y='1' width={value - prevValue} height='1.4' fill={color}></rect>)
      rects.push(<text x={(value + prevValue) / 2} y='2' className='text-bar-label'>{label}</text>)
      if (i !== bmiTable.length - 1) {
        rects.push(<text x={value} y='0.8' className='text-bar-value'>{value}</text>)
      }
    }
    return (
      <svg width='100%' viewBox={`${minValue} 0 ${maxValue - minValue} 5`}>
        <style>
        {`
          .text-bar-label {
            font-size: .8px;
            font-weight: bold;
            text-anchor: middle;
          }

          .text-bar-value {
            font-size: .6px;
            text-anchor: middle;
          }

          .indicator-line {
            stroke: black;
            stroke-width: .13px;
          }

          .indicator-label {
            font-size: 1px;
            font-weight: bold;
            text-anchor: middle;
          }

          .indicator-value {
            font-size: 0.8px;
            text-anchor: middle;
          }
        `}
        </style>
        { rects }
        { indicatorValues.map(({bmi, label}) => <>
          <line x1={bmi} y1='0.7' x2={bmi} y2='3.2' className='indicator-line'></line>
          <text x={bmi} y='4.0' className='indicator-label'>{label}</text>
          <text x={bmi} y='5.0' className='indicator-value'>{bmi}</text>
        </>) }
      </svg>
    )
  }
}

export default BMIGraph
