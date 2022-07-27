import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './selectedBeast.css';

class SelectedBeast extends React.Component{
  render(){
  return (
    <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className='image' src={this.props.SelectedBeast.image_url} alt={this.props.SelectedBeast.title} />
        {this.props.SelectedBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}}


export default SelectedBeast;