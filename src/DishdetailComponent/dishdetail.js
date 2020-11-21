import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function Rendercomment({dishdtil}) {
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

function Dishdetail({ dishdtil }) {

    if (dishdtil != null) {
        console.log(dishdtil.name);
        const comment = dishdtil.comments.map((com) => {
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
                        <Rendercomment dishdtil={dishdtil} />
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

};

export default Dishdetail;