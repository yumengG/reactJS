import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';



class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dishdtil,

        }
    }


    render() {

        if (this.props.dishdtil != null) {
            console.log(this.props.dishdtil.name);
            const comment = this.props.dishdtil.comments.map((com) => {
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
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dishdtil.image} alt={this.props.dishdtil.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dishdtil.name}</CardTitle>
                                    <CardText>{this.props.dishdtil.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                            <div>Comment</div>
                        <br />
                                {comment}
                            </Card>

                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div></div>
            )
        }

    }
}
export default Dishdetail;