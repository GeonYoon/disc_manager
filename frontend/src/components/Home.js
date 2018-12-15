import React, {Component} from 'react';
import BMIGraph from './graph/BMIGraph';
import avatarImg from '../assets/man_avatar.png'
import {
  CardPanel,
  Row,
  Table
} from 'react-materialize'
import friendsData from '../apimock/friendsData'

class Home extends Component {
  render() {
    const { percentage, username, muscle, fat, bmi } = this.props

    const data = [
      { label: `나 (${username})`, bmi, highlight: true },
      ...friendsData.map(({name, height, weight}) => ({
        label: name,
        bmi: weight / height / height * 10000
      }))
    ]
    return (
      <div style={{padding:20}}>
        <CardPanel s={12}>
          <h3>{username}의 정보</h3>
          <CardPanel className='teal lighten-4'>
            <strong>디스크에 걸릴 확률은 {percentage}% 입니다.</strong>
          </CardPanel>
          <Row className='center-align'>
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
                <td>{bmi.toFixed(1)}</td>
                <td>{muscle}</td>
                <td>{fat}</td>
              </tr>
            </tbody>
          </Table>
        </CardPanel>
      </div>
    );
  }
}

export default Home
