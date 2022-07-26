import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {this.props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{this.props.imageUrl}</h4>
        <p>
        {this.props.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class ModalShow extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }



    render(){
        return(
        <>
        <img/>
        </>
     ) }
}
export default MyModal;