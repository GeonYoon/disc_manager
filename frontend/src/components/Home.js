import React, {Component} from 'react';
import BMIGraph from './graph/BMIGraph';
import avatarImg from '../assets/man_avatar.png'
import {
  CardPanel,
  Row,
  Table
} from 'react-materialize'

const username = '덴마'

const myBMI = 23
const myMuscle = 30
const myFat = 30

const friendBMI = [
  { label: '다이크', bmi: 22 },
  { label: '가이린', bmi: 18 },
  { label: '엘', bmi: 24 },
  { label: '하즈', bmi: 27 }
]

class Home extends Component {
  render() {
    const data = [
      { label: `나 (${username})`, bmi: myBMI, highlight: true },
      ...friendBMI
    ]
    return (
      <div style={{padding:20}}>
        <CardPanel s={12}>
          <h3>{username}의 정보</h3>
          <Row class='center-align'>
            <img src={avatarImg} width={200} alt='내 이미지' />
          </Row>
          <BMIGraph value={data}></BMIGraph>

          <Table bordered={true}>
            <thead>
              <tr>
                <th>BMI</th>
                <th>근육량</th>
                <th>체지방율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{myBMI}</td>
                <td>{myMuscle}</td>
                <td>{myFat}</td>
              </tr>
            </tbody>
          </Table>
        </CardPanel>
      </div>
    );
  }
}

export default Home
