import React, {Component} from 'react';
import { Row, Input } from 'react-materialize';


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      age : '',
      blood_pressure : ''
    };

    // TODO: Remove this
    setTimeout(() => {
      this.setState({
        age: 24,
        blood_pressure: 80
      })
      this.props.handleForm(24, 80, this.props.history);
    }, 100)
    // TODO
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value});
  };

  handleSubmit = e => {
    this.props.handleForm(this.state.age,this.state.blood_pressure,this.props.history);
  }

  render() {
    return(
            <div style={{padding:20}}>
              <Row>
                <Input
                  type='textarea'
                  label="Your Age"
                  s={12}
                  name="age"
                  onChange={this.handleChange}
                />
                <Input
                  type='textarea'
                  label="Your Blood Pressure"
                  s={12}
                  name="blood_pressure"
                  onChange={this.handleChange}
                />
              </Row>
              <div className="fixed-action-btn">
                <div className="btn-floating btn-large red">
                    <i
                      className="material-icons"
                      onClick={this.handleSubmit}
                    >
                      add
                    </i>
                </div>
              </div>
            </div>
          );
  }
}

export default Form
