import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0 
        }
    }

handelClick = () =>{
    this.setState({ counter: this.state.counter + 1 });
}

render() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={this.handelClick} />
                <Card.Body>
                    <Card.Title>{this.props.title} ❤ {this.state.counter} </Card.Title>
                    <Card.Text>{this.props.description}
                    
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}
}

export default HornedBeast;