import React from "react";
import Form from 'react-bootstrap/Form';
import './FormStyle.css';
import data from './data.json';

class Forms extends React.Component {
constructor(props){
super(props);
this.state ={
  beast: data,
  hornsNumber: ""
}
}

selectNumber = (e)=>{
  this.setState({
 hornsNumber : e.target.Select.value
})
if (this.hornsNumber === this.props.beast.horns){

}
}
  render() {
    return (
      <div >

        <Form.Select id='select' className="selectForm" size="lg" aria-label="Default select example" onChange = {(e) => this.props.handleChange(e)}>
          <option>select number of horns</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">one hundred</option>
        </Form.Select>
        
      </div>

    )
  }
}

export default Forms;