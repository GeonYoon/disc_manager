import React from 'react'
import friendsData from '../apimock/friendsData'
import getLumbarScore from '../apimock/lumbarScore'
import { Table } from 'react-materialize'
import classnames from 'classnames'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Friends = (props) => {
  const myData = {
    name: props.username,
    height: props.form.height,
    weight: props.form.weight
  }

  const sortedData = friendsData.slice()
    .concat([myData]).sort((a, b) => getLumbarScore(b) - getLumbarScore(a))

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
            <th>#</th>
            <th>이름</th>
            <th>키</th>
            <th>몸무게</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => <tr key={data.name} className={classnames({
            highlight: data === myData
          })}>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.weight}</td>
            <td>{getLumbarScore(data).toFixed(1)}</td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = ({ auth, form }) => {
  return {
    auth: auth.isAuthenticated,
    username: auth.user,
    form
  }
};

export default withRouter(connect(mapStateToProps, null)(Friends))

