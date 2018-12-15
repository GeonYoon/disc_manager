import React, {Component} from 'react';
import NormalDistributionGraph from './graph/NormalDistributionGraph';

class Home extends Component {

  render() {

    return (
      <div style={{padding:20}}>
        Hello!
        <NormalDistributionGraph mean='0' stdev='1'></NormalDistributionGraph>
      </div>
    );
  }
}

export default Home
