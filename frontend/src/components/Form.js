import React, {Component} from 'react'
import { Row, Input } from 'react-materialize'


class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      age : null,
      height : null,
      weight : null,
      muscle_mass : null,
      body_fat : null,
      smoking : null,
      file: null,
      pain: null,
      accident : null,
      gender : null,
      ...props.form
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangeNumber = e => {
    this.setState({ [e.target.name]: e.target.value ? e.target.value | 0 : null })
  }

  handleSubmit = e => {
    this.props.handleForm(this.state)
  }

  render() {
    return(
            <div style={{padding:20}}>
              <Row>
                <Input
                  label="Your age"
                  s={6}
                  name="age"
                  defaultValue={this.state.age}
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="Type your gender"
                  s={6}
                  name="gender"
                  defaultValue={this.state.gender}
                  onChange={this.handleChange}
                />
                <Input
                  label="Do you feel pain from your back?"
                  s={6}
                  name="pain"
                  defaultValue={this.state.pain}
                  onChange={this.handleChange}
                />
                 <Input
                  label="have you ever been hurt your back?"
                  s={6}
                  name="accident"
                  defaultValue={this.state.accident}
                  onChange={this.handleChange}
                />
                <Input
                  label="height (cm)"
                  s={6}
                  name="height"
                  defaultValue={this.state.height}
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="weight (kg)"
                  s={6}
                  name="weight"
                  defaultValue={this.state.weight}
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="muscle_mass (kg)"
                  s={6}
                  name="muscle_mass"
                  defaultValue={this.state.muscle_mass}
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="body_fat (%)"
                  s={6}
                  name="body_fat"
                  defaultValue={this.state.body_fat}
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="Type YES if you smoke or Type No"
                  s={6}
                  name="smoking"
                  defaultValue={this.state.smoking}
                  onChange={this.handleChange}
                />
                <Input type="file"
                       label="File"
                       name="file"
                       onChange={this.handleChange}
                       s={6}
                       placeholder="Upload your genetic file"
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
          )
  }
}

export default Form
