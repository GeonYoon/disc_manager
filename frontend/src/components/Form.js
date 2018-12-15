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
      file: null
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
                  label="Your Age"
                  s={12}
                  name="age"
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="height"
                  s={12}
                  name="height"
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="weight"
                  s={12}
                  name="weight"
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="muscle_mass"
                  s={12}
                  name="muscle_mass"
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="body_fat"
                  s={12}
                  name="body_fat"
                  onChange={this.handleChangeNumber}
                />
                <Input
                  label="Type YES if you smoke or Type No"
                  s={12}
                  name="smoking"
                  onChange={this.handleChange}
                />
                <Input type="file"
                       label="File"
                       name="file"
                       onChange={this.handleChange}
                       s={12}
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
