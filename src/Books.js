import React, {Component} from 'react';
import { render } from 'react-dom';
import {Table} from 'react-bootstrap';


import{Button, ButtonToolbar} from 'react-bootstrap';
import {AddBookModal} from './AddBookModal';
import {EditBookModal} from './EditBookModal';




export class Books extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], AddModalShow:false, editBookShow:false}

    }

        refreshList(){
            fetch(process.env.React_App_Api+'books')
            .then(response=>response.json())
            .then(data=>{
                this.setState({deps:data});


            });

        }

        componentDidMount(){
            this.refreshList()

        }

        componentDidMount(){
            this.refreshList();

        }

   render(){
       const{deps, depid, depname}=this.state;
       let addModalClose=()=> this.setState({addModalShow:false});
       let editModalClose=()=> this.setState({editModalShow:false});
       return(
        <div>
            <Table className ="mt-4" striped bordered hover size ="sm">
                <thread>
                    <tr>
                    <th>Book Name</th>
                    <th>Book Authors</th>
                    <th>Number</th>
                    <th>Options</th>
                     
                    
                    

                    </tr>
                </thread>
                <tbody>
                    {deps.map(dep=>
                        <tr key={dep.BookName}>
                            <td> {dep.BookName}</td>
                            <td>{dep.BookAuthors}</td>
                            <td>{dep.Number}</td>
                            <td>
                                <ButtonToolbar>
                            <Button className="mr-2" variant="info"
                            onClick={()=>this.setState({editModalShow:true, 
                            depid:dep.Number, depname:dep.BookName})}>
                                Edit


                            </Button>

                            <EditBookModal show={this.state.editBookShow}
                            onHide={editModalClose}
                            depid={depid}
                            depname={depname}/>

                                </ButtonToolbar>


                            </td>
                            

                        </tr>
                        )}
                </tbody>
            </Table>

            <ButtonToolbar>
                   <Button variant='primary'
                   onClick={()=>this.setState({addModalShow:true})}>
                   Add Book </Button>  

                      <AddBookModal show={this.state.AddModalShow}></AddBookModal>
                     
                      

            </ButtonToolbar>
            
            <ButtonToolbar>
            
                   <Button variant='secondary'
                   onClick={()=>this.setState({addModalShow:true})}>
                  Delete book </Button>  

                      <AddBookModal show={this.state.AddModalShow}></AddBookModal>
                     
                      

            </ButtonToolbar>
        </div>

       )


   } 
}