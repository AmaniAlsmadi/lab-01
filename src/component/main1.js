import React from 'react';
import HornedBeast from './hornedBeast';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./styleForm.css";

class Main extends React.Component {

  

  // in the onChange I call back the disblayhorns
  render() {
    return (
      <>
          <Form.Select className="selectForm" size="lg"  width="25%" aria-label="Default select example" onChange={(e) => this.props.displayhorns(e)} >
          <option value="">select number of horns</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">one hundred</option>
        </Form.Select>

      <Row xs={1} md={3} className="g-4">

        {
          this.props.allbeast.map((item, idx) =>
            <Col key={idx}>
             
              < HornedBeast title={item.title} imageUrl={item.image_url} description={item.description} displayModal={this.props.displayModal} data={item} />

            </Col>
          )
        }
      </Row>
      </>
    )
  }
}

export default Main;