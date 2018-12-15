import React from 'react'
import friendsData from '../assets/friendsData'
import { Table } from 'react-materialize'
import classnames from 'classnames'

function bmi ({ height, weight }) {
  return weight / height / height * 10000
}

const Friends = () => {
  const myData = {
    name: '나',
    height: 178,
    weight: 85
  }

  const sortedData = friendsData.slice()
    .concat([myData]).sort((a, b) => bmi(a) - bmi(b))

  return (
    <div style ={{ textAlign : 'center'}}>
      <h1>Friends</h1>

      <style>
      {`
        table tbody tr.highlight {
          background-color: #fdd;
        }
      `}
      </style>

      <Table>
        <thead>
          <tr>
            <th>이름</th>
            <th>키</th>
            <th>몸무게</th>
            <th>BMI</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(data => <tr key={data.name} className={classnames({
            highlight: data === myData
          })}>
            <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.weight}</td>
            <td>{bmi(data).toFixed(1)}</td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default Friends;