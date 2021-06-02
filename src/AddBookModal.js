import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, ModalBody} from 'react-bootstrap';

export class AddBookModal extends Component {
    constructor(props){
        super(props);
        this.handleSumbit=this.handleSumbit.bind(this);

    }

    handleSumbit(event){
        event.preventDefault();
        fetch (process.env.React_App_Api+'department',{
        method:'Post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'

        },
        body:JSON.stringify({
            Number:null,
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
            Add Book

            </Modal.Title>
            


            </Modal.Header>
            <ModalBody>
                
                <Row>
            <Col sm={6}>
                <Form onSumbit={this.handleSubmit}>
                <Form.Group controlId="Book Name">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" name="Book Name" required
                placeholder="Book Name"/>

                </Form.Group>
                <Button variant="primary" type= "Sumbit">
                Add Book

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