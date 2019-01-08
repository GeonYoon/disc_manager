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
      const group = []
      group.push(<rect key='rect' x={prevValue} y='1.7' width={value - prevValue} height='1.4' fill={color}></rect>)
      group.push(<text key='label' x={(value + prevValue) / 2} y='2.7' className='text-bar-label'>{label}</text>)
      if (i !== bmiTable.length - 1) {
        group.push(<text key='value' x={value} y='1.5' className='text-bar-value'>{value.toFixed(1)}</text>)
      }
      rects.push(<g key={`rect_${label}`}>{group}</g>)
    }
    return (
      <svg width='100%' viewBox={`${minValue} 0 ${maxValue - minValue} 5.5`}>
        <style>
        {`
          .text-bar-label {
            font-size: .8px;
            font-weight: bold;
            text-anchor: middle;
          }

          .text-bar-value {
            fill: #aaa;
            font-size: .6px;
            text-anchor: middle;
          }

          .indicator-line {
            stroke: #444;
            stroke-width: .1px;
          }

          .indicator-label {
            font-size: 0.4px;
          }

          .indicator-value {
            font-size: 0.9px;
            text-anchor: middle;
            opacity: 0.1;
          }

          .indicator:hover .indicator-value {
            transition: opacity 0.1s linear;
            opacity: 1;
          }
        `}
        </style>
        { rects }
        { indicatorValues.map(({bmi, label, highlight}) => <g className='indicator' key={`indicator_${label}`}>
          <line x1={bmi} y1='1.1' x2={bmi} y2='3.7' className='indicator-line'></line>
          <text x={bmi} y='0.8' className='indicator-value'>{bmi.toFixed(1)}</text>
          <text x={bmi - 0.4} y='4.2' className='indicator-label' transform={`rotate(30 ${bmi} 4.6)`}
            fontWeight={highlight ? 'bold' : 'normal'}>{label}</text>
        </g>) }
      </svg>
    )
  }
}

export default BMIGraph
