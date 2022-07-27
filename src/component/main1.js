import React from 'react';
import HornedBeast from './hornedBeast';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {

  render() {
    return (
      <Row xs={1} md={3} className="g-4">

        {
          this.props.allbeast.map((item, idx) =>
            <Col key={idx}>
              < HornedBeast title={item.title} imageUrl={item.image_url} description={item.description} displayModal={this.props.displayModal} data={item}/>

            </Col>
          )
        }


      </Row>
    )
  }
}

export default Main;