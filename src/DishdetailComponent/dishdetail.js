/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody,
    Row, Label, Col, Input
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from '../components/LoadingComponent';

function Rendercomment({ dishdtil }) {
    return (
        <Card>
            <CardImg top src={dishdtil.image} alt={dishdtil.name} />
            <CardBody>
                <CardTitle>{dishdtil.name}</CardTitle>
                <CardText>{dishdtil.description}</CardText>
            </CardBody>
        </Card>
    )

}


function Dishdetail({ dish, isLoading, dishesErrMess, comments, addComment }) {
    console.log(dish);
    const [modal, setModal] = useState(false);
    let dishId = "10";
    const toggleModal = () => {
        setModal(!modal)
    }
    const modalSubmit = (values) => {
        toggleModal();
        addComment(dishId, values.rating, values.yourname, values.comment);
        alert(JSON.stringify(values));
    }
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    if (isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (dishesErrMess) {
        return (
            <div className="container">
                <div className="row">            
                    <h4>{dishesErrMess}</h4>
                </div>
            </div>
        );
    }
    else if (dish != null) {
        if (dish != null) {
            console.log(dish.name);
            const comment = comments.map((com) => {
                return (
                    <div>
    
                        <div>{com.author}</div>
                        <div>{com.comment}</div>
                        <br />
                    </div>
                );
            });
    
    
    
            return (
                <div className="container">
                    <h3 className="text-left">Menu</h3>
                    <hr />
                    <div className="row">
    
                        <div className="col-12 col-md-5 m-1">
                            <Rendercomment dishdtil={dish} 
                            />
                        </div>
                        <div className="col-12 col-md-5 m-1 text-left">
                            <div >Comment</div>
                            <br />
                            {comment}
                            <Button outline onClick={toggleModal} color="secondary" type="submit" value="submit" className="button">Submit Comment</Button>
                            <Modal isOpen={modal} toggle={toggleModal}>
                                <ModalHeader toggle={toggleModal}>comment</ModalHeader>
                                <ModalBody>
                                    <LocalForm onSubmit={(values) => modalSubmit(values)}>
                                        <Row className="form-group">
                                            <Label for="rating" md={12}>Rating</Label>
                                            <Col md={12}>
                                                <Control.select model=".rating" id="rating" name="rating"
                                                className="form-control">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="yourname" md={12}>Your Name</Label>
                                            <Col md={12}>
                                                <Control.text model=".yourname" id="yourname" name="yourname"
                                                    placeholder="Your Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".yourname"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required; ',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="comment" md={12}>Comment</Label>
                                            <Col>
                                                <Control.textarea model=".comment" id="comment" name="comment"
                                                    rows="7"
                                                    className="form-control"
                                                    validators={{required}}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".comment"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required; '
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col >
                                                <Button type="submit" color="primary">
                                                    Send Comment
                                        </Button>
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </ModalBody>
                            </Modal>
    
                        </div>
                    </div>
                </div>
            );
        } 
    } else {
        return (
            <div></div>
        )
    }
    
    

};

export default Dishdetail;