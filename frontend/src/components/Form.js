import React, {Component} from 'react';
import { Row, Input } from 'react-materialize';


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      age : '',
      height : '',
      weight : '',
      muscle_mass : '',
      body_fat : '',
      smoking : '',
      file: null
    };
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value});
  };

  handleSubmit = e => {
    this.props.handleForm(this.state.age,
                          this.state.height,
                          this.state.weight,
                          this.state.muscle_mass,
                          this.state.body_fat,
                          this.state.smoking,
                          this.state.file,
                          this.props.history);
  }

  render() {
    return(
            <div style={{padding:20}}>
              <Row>
                <Input
                  label="Your Age"
                  s={12}
                  name="age"
                  onChange={this.handleChange}
                />
                <Input
                  label="height"
                  s={12}
                  name="height"
                  onChange={this.handleChange}
                />
                <Input
                  label="weight"
                  s={12}
                  name="weight"
                  onChange={this.handleChange}
                />
                <Input
                  label="muscle_mass"
                  s={12}
                  name="muscle_mass"
                  onChange={this.handleChange}
                />
                <Input
                  label="body_fat"
                  s={12}
                  name="body_fat"
                  onChange={this.handleChange}
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
          );
  }
}

export default Form
