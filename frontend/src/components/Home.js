import React, {Component} from 'react';
import BMIGraph from './graph/BMIGraph';

const username = '덴마'

const myBMI = 23
const friendBMI = [
  { label: '다이크', bmi: 22 },
  { label: '가이린', bmi: 18 },
  { label: '엘', bmi: 24 },
  { label: '하즈', bmi: 27 }
]

class Home extends Component {
  render() {
    const data = [
      { label: `나 (${username})`, bmi: myBMI },
      ...friendBMI
    ]
    return (
      <div style={{padding:20}}>
        Hello!
        <BMIGraph value={data}></BMIGraph>
      </div>
    );
  }
}

export default Home
