import React, {Component} from 'react'
import { Row, Input } from 'react-materialize'
import '../css/form.css'


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
      pain: null,
      accident : null,
      gender : null,
      ...this.props.form
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    this.props.handleForm(this.state,this.props.token)
  }

  render() {
    return(
            <div style={{padding:20}}>
              <Row>
                <Input
                  label="Your age"
                  s={12}
                  name="age"
                  defaultValue={this.state.age}
                  onChange={this.handleChange}
                />
                <Input
                  label="height (cm)"
                  s={6}
                  name="height"
                  defaultValue={this.state.height}
                  onChange={this.handleChange}
                />
                <Input
                  label="weight (kg)"
                  s={6}
                  name="weight"
                  defaultValue={this.state.weight}
                  onChange={this.handleChange}
                />
                <Input
                  label="muscle_mass (kg)"
                  s={6}
                  name="muscle_mass"
                  defaultValue={this.state.muscle_mass}
                  onChange={this.handleChange}
                />
                <Input
                  label="body_fat (%)"
                  s={6}
                  name="body_fat"
                  defaultValue={this.state.body_fat}
                  onChange={this.handleChange}
                />
              
                <Input name='smoking' s={6}type='radio' value='true' label='I do smoke' onChange={this.handleChange } checked={this.state.smoking === 'true'}/>
                <Input name='smoking' s={6}type='radio' value='false' label='I do NOT smoke'onChange={this.handleChange} checked={this.state.smoking === 'false'}/>

                <Input name='pain' s={6}type='radio' value='true' label='I do feel the pain from back' onChange={this.handleChange} checked={this.state.smoking === 'true'}/>
                <Input name='pain' s={6}type='radio' value='false' label='I do NOT feel the pain' onChange={this.handleChange} checked={this.state.smoking === 'false'}/>

                <Input name='accident' s={6}type='radio' value='true' label='I have been hurt my back' onChange={this.handleChange} checked={this.state.smoking === 'true'}/>
                <Input name='accident' s={6}type='radio' value='false' label='I have NEVER been hurt my back' onChange={this.handleChange} checked={this.state.smoking === 'false'}/>

                <Input name='gender' s={6}type='radio' value='M' label='Male' onChange={this.handleChange} checked={this.state.gender === 'M'}/>
                <Input name='gender' s={6}type='radio' value='F' label='Female' onChange={this.handleChange} checked={this.state.gender === 'F'}/>
          
              </Row>
              <div className="margin-top">
                {/* <div className="col s6 btn-large red lighten-2 left">
                    <i
                      className="material-icons"
                      onClick={this.handleSubmit}
                    >
                      update
                    </i>
                </div> */}
                <div className="col s6 btn-large red lighten-2 right">
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
