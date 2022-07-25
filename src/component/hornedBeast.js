import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0
        }
    }

    handelClick = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }

    render() {
        return (
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={this.props.image_url} alt={this.props.title} onClick={this.handleClick}/>
                    <Card.ImgOverlay>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                        <p>{this.props.description}</p>
                        </Card.Text>
                        <Card.Text><span> ❤ {this.state.clickCounter}</span></Card.Text>
                    </Card.ImgOverlay>
                </Card>
                
            </div>
        )
    }
}

export default HornedBeast;