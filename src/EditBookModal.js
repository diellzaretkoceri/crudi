import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, ModalBody} from 'react-bootstrap';

export class EditBookModal extends Component {
    constructor(props){
        super(props);
        this.handleSumbit=this.handleSumbit.bind(this);

    }

    handleSumbit(event){
        event.preventDefault();
        fetch (process.env.React_App_Api+'department',{
        method:'Put',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'

        },
        body:JSON.stringify({
            Number:event.target.Number.value,
            BookName: event.target.BookName.value



        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    }, 
    (error)=>{
        alert('Failed');

    })


    }

    render(){
        return(
            <div className="container">

<Modal
{...this.props}
size='lg'
aria-labelledby="contained-modal-title-vcenter"
centered
>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Edit Book

            </Modal.Title>
            


            </Modal.Header>
            <ModalBody>
                
                <Row>
            <Col sm={6}>
                <Form onSumbit={this.handleSubmit}>
                <Form.Group controlId="Number">
                <Form.Label>Number</Form.Label>
                <Form.Control type="text" name="Number" required
                disabled
                defaultValue={this.props.depid}
                placeholder="Number"/>
                </Form.Group>

                <Form.Group controlId="Book Name">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" name="Book Name" required
                defaultValue={this.props.depname}
                placeholder="Book Name"/>

                </Form.Group>
                <Button variant="primary" type= "Sumbit">
                Update Book

                </Button>

                </Form>

            </Col>

                </Row>
            </ModalBody>

            <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>

            </Modal.Footer>

</Modal>

            </div>

        )

    }

}